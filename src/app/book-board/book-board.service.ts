import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { IBook } from '../types';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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
        console.log('book data saved in ',books);
        this.books = books;
    }


}
