import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { IBook } from '../types/book.interfacce';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-book-board',
  templateUrl: './book-board.component.html',
  styleUrls: ['./book-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookBoardComponent implements OnInit {
  public myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = ['Id', 'title', 'isAvailable'];
  dataSource: any; // MatTableDataSource<IBook>;
  expandedElement: IBook;
  booksCollection: AngularFirestoreCollection<IBook>;
  books: Observable<IBook[]>;
  constructor(private _asfServiceReference: AngularFirestore) { }

  ngOnInit() {
    this.booksCollection = this._asfServiceReference.collection('books', ref => ref.orderBy('Id'));
    this.books = this.booksCollection.valueChanges();
    this.books.subscribe(data => {
      console.log('booksData', data);
      this.dataSource = new MatTableDataSource(data);
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
