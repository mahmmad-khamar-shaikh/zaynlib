import { Component, OnInit } from '@angular/core';
import { BookBoardService } from '../book-board/book-board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../types';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public selectedBook: IBook;
  constructor(private _bookBoardService: BookBoardService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this._bookBoardService.getBookDataFromStore()
        .map((book: IBook) => {
          if (book.Id === +params['id']) {
            this.selectedBook = book;
          }
        });
    });
  }

  goBacktoList() {
    this._router.navigate(['/dashboard']);
  }

}
