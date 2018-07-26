import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { IBook } from '../types/book.interfacce';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: IBook[] = [
  {
    Id: 1, assignee: 'shahid',
    title: 'The proagmatic programmer', isAvailable: false, owner: 'Amol Jadhav', author: 'Den'
  },
  {
    Id: 2, assignee: 'vaibhav',
    title: 'You dont know JS', isAvailable: false, owner: 'Amol Jadhav', author: 'Simpson', subTitle: 'Async Programming'
  },
  {
    Id: 3, assignee: 'ravi',
    title: 'Clean Code', isAvailable: false, owner: 'Amol Jadhav', author: 'Rob Martin'
  },
  {
    Id: 4, assignee: null,
    title: 'Clean Code Architecture', isAvailable: true, owner: 'Amol Jadhav', author: 'Rob Martin'
  }
  ,
  {
    Id: 5, assignee: null,
    title: 'Elisabeth Freeman and Eric Freeman', isAvailable: true, owner: 'Amol Jadhav', author: 'Elisabeth Freeman and Eric Freeman'
  },
  {
    Id: 6, assignee: null,
    title: 'Spring in Action', isAvailable: true, owner: 'Amol Jadhav', author: 'Craig Walls'
  }
  ,
  {
    Id: 7, assignee: null,
    title: 'Effective Java', isAvailable: true, owner: 'Amol Jadhav', author: 'Joshua Bloch'
  },
  {
    Id: 2, assignee: 'vaibhav',
    title: 'You dont know JS', isAvailable: false, owner: 'Amol Jadhav', author: 'Simpson', subTitle: 'Async Programming'
  },
  {
    Id: 3, assignee: 'ravi',
    title: 'Clean Code', isAvailable: false, owner: 'Amol Jadhav', author: 'Rob Martin'
  },
  {
    Id: 4, assignee: null,
    title: 'Clean Code Architecture', isAvailable: true, owner: 'Amol Jadhav', author: 'Rob Martin'
  }
  ,
  {
    Id: 5, assignee: null,
    title: 'Elisabeth Freeman and Eric Freeman', isAvailable: true, owner: 'Amol Jadhav', author: 'Elisabeth Freeman and Eric Freeman'
  },
  {
    Id: 6, assignee: null,
    title: 'Spring in Action', isAvailable: true, owner: 'Amol Jadhav', author: 'Craig Walls'
  }
  ,
  {
    Id: 4, assignee: null,
    title: 'Effective Java', isAvailable: true, owner: 'Amol Jadhav', author: 'Joshua Bloch'
  }


];
@Component({
  selector: 'app-book-board',
  templateUrl: './book-board.component.html',
  styleUrls: ['./book-board.component.css']
})
export class BookBoardComponent implements OnInit {
  public myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = ['title', 'isAvailable'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
