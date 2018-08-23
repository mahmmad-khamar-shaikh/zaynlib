import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { IBook } from '../types';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookBoardService {
    booksCollection: AngularFirestoreCollection<IBook>;
    books: Observable<IBook[]>;
    constructor(private _asfServiceReference: AngularFirestore,
        private _httpService: HttpClient) { }
    loadBookData(): Observable<IBook[]> {
        this.booksCollection = this._asfServiceReference.collection('books', ref => ref.orderBy('Id'));
        return this.booksCollection.valueChanges();

        // return this._httpService.get('../../assets/mock-data/books-list.json')
        //     .map(data => {
        //         return <IBook[]>data;
        //     });
    }

}
