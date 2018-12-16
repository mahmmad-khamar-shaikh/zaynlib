import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { IBook } from '../types';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { fromEventPattern } from 'rxjs';

@Injectable()
export class BookBoardService implements OnInit {
    booksCollection: AngularFirestoreCollection<IBook>;
    books: IBook[];
    constructor(
        private _asfServiceReference: AngularFirestore,
        private _httpService: HttpClient
    ) { }

    ngOnInit(): void {
    }

    /**
     * Loading book data from services
     * Loads details for all books.
     * @returns {Observable<IBook[]>}
     * @memberof BookBoardService
     */
    loadBookData(): Observable<IBook[]> {
        this.booksCollection = this._asfServiceReference.collection('books', ref => ref.orderBy('Id'));
        return this.booksCollection.valueChanges();

        // return this._httpService.get('../../assets/mock-data/books-list.json')
        //     .map(data => {
        //         return <IBook[]>data;
        //     });
    }
    updateBookData(payloadToUpload: IBook, assignee: string) {
        const filterCollection = this._asfServiceReference
            .collection('books', ref => ref.where('Id', '==', payloadToUpload.Id));
        const filterBook = filterCollection.snapshotChanges()
            .map((actions) => {
                return actions.map((action) => {
                    const data = action.payload.doc.data() as IBook;
                    const id = action.payload.doc.id;
                    return {
                        id, ...data
                    };
                });
            });
        filterBook.subscribe((filterData) => {
            filterCollection.doc(filterData[0].id).update({ ...payloadToUpload, Assignee: assignee })
                .then((success) => {
                    console.log('record updated successfully ', success);
                    this.sendNotificationToOwner(payloadToUpload, assignee);
                })
                .catch(err => {
                    console.log('Error Updating records ', err);
                });
        });



    }
    getBookDataFromStore(): IBook[] {
        return this.books;
    }
    setBookDataToStore(books: IBook[]) {
        this.books = books;
    }

    private sendNotificationToOwner(bookUpdatePayload: IBook, assinee: string) {

        const fcmOptions = {
            method: 'POST',
            url: 'https://fcm.googleapis.com/fcm/send',
            // // get the key from Firebase console
            headers: { Authorization: `key=${environment.fcmServerKey}` },
            json: {
                notification: {
                    title: 'Book Allocated',
                    body: `Book : ${bookUpdatePayload.Title} is assigned to ${assinee}`,
                    click_action: 'https://zyanlib-ba1c6.firebaseapp.com/home'
                },
                // userData is where your client stored the FCM token for the given user
                // it should be read from the database
                to: bookUpdatePayload.Owner.Email
            }
        };
        console.log('sending request for ', fcmOptions);
        this._httpService.post(fcmOptions.url, fcmOptions.json, { headers: fcmOptions.headers }).subscribe(result => {
            console.log('notifcation send Successfullly ');
        }, err => {
            console.log('notification could not be sent ', err);
        });
        //        return request(fcmOptions).catch(() => console.log(\`ERROR: Push failed for user ${userData.email}\`));
    }
}
