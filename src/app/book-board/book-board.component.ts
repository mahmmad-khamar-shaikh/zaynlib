import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { IBook } from '../types/book.interfacce';
import {animate, state, style, transition, trigger} from '@angular/animations';


const ELEMENT_DATA: IBook[] = [
  {
    Id: 1, assignee: 'Shaikh',
    title: 'The proagmatic programmer', isAvailable: false, owner: 'Amol Jadhav', author: 'Andy Hunt, Dave Thomas'
  },
  {
    Id: 2, assignee: '',
    title: 'The Art of Agile Development', isAvailable: true, owner: 'Amol Jadhav', author: 'James Shore', subTitle: ''
  },
  {
    Id: 3, assignee: 'ravi',
    title: 'Clean Code', isAvailable: false, owner: 'Amol Jadhav', author: 'Robert Cecil Martin'
  },
  {
    Id: 4, assignee: '',
    title: 'Clean Architecture', isAvailable: true, owner: 'Amol Jadhav', author: 'Robert Cecil Martin'
  }
  ,
  {
    Id: 5, assignee: '',
    title: 'Head First JavaScript Programming', isAvailable: true, owner: 'Amol Jadhav', author: 'Eric Freeman, Elisabeth Freeman'
  },
  {
    Id: 6, assignee: '',
    title: 'Spring in Action', isAvailable: true, owner: 'Amol Jadhav', author: 'Craig Walls'
  }
  ,
  {
    Id: 7, assignee: '',
    title: 'Developing Backbone.js Application', isAvailable: true, owner: 'Amol Jadhav', author: 'Addy Osmani',
    subTitle: 'Building Better JavaScript Applications'
  },
  {
    Id: 2, assignee: '',
    title: 'JUnit in Action', isAvailable: true, owner: 'Amol Jadhav', author: 'Vincent Massol, Ted Husted', subTitle: ''
  },
  {
    Id: 8, assignee: '',
    title: 'AngularJS', isAvailable: true, owner: 'Amol Jadhav', author: 'Green & Seshadri'
  },
  {
    Id: 9, assignee: '',
    title: 'Clean Code Architecture', isAvailable: true, owner: 'Amol Jadhav', author: 'Rob Martin'
  }
  ,
  {
    Id: 10, assignee: '',
    title: 'Selenium Testing Tools Cookbook', isAvailable: true, owner: 'Amol Jadhav', author: 'Unmesh Gundecha'
  },
  {
    Id: 11, assignee: 'Vaibhav',
    title: 'You Dont Know JS', isAvailable: true, owner: 'Amol Jadhav', author: 'Kyle Simpson',
    subTitle: 'Async & Performance'
  }
  ,
  {
    Id: 12, assignee: '',
    title: 'You Dont Know JS', isAvailable: true, owner: 'Amol Jadhav', author: 'Kyle Simpson', subTitle: 'Up & Going'
  }
  ,
  {
    Id: 13, assignee: '',
    title: 'NoSQL Distilled', isAvailable: true, owner: 'Amol Jadhav', author: 'Martin Fowler, Pramod J. Sadalage',
    subTitle: 'A Brief Guide to the Emerging World of Polyglot Persistence'
  }

  ,
  {
    Id: 14, assignee: '',
    title: 'Spring Microservices', isAvailable: true, owner: 'Amol Jadhav', author: 'Rajesh RV', subTitle: ''
  }
  ,
  {
    Id: 15, assignee: '',
    title: 'Head First Design Patterns', isAvailable: true, owner: 'Amol Jadhav',
    author: 'Elisabeth Freeman and Kathy Sierra', subTitle: 'Up & Going'
  }
  ,
  {
    Id: 16, assignee: '',
    title: 'Bootstrap', isAvailable: true, owner: 'Amol Jadhav', author: 'Jake Spurlock', subTitle: 'Responsive Web Development'
  }
  ,
  {
    Id: 17, assignee: '',
    title: 'Soft Skills', isAvailable: true, owner: 'Amol Jadhav', author: 'John Z. Sonmez', subTitle: 'The Software Developers Life Manual'
  }
  ,
  {
    Id: 18, assignee: '',
    title: 'Drive', isAvailable: true, owner: 'Amol Jadhav',
    author: 'Daniel H. Pink', subTitle: 'The Surprising Truth About What Motivates Us'
  },
  {
    Id: 19, assignee: '',
    title: 'Out of the Crisis', isAvailable: true, owner: 'Amol Jadhav',
    author: 'W. Edwards Deming', subTitle: ''
  },
  {
    Id: 20, assignee: '',
    title: 'Blockchain Revolution', isAvailable: true, owner: 'Amol Jadhav',
    author: 'Don Tapscott, Alex Tapscott', subTitle: 'How the Technology Behind Bitcoin Is Changing Money'
  },
  {
    Id: 21, assignee: '',
    title: 'The Machine That Changed the World', isAvailable: true, owner: 'Amol Jadhav',
    author: ' James P. Womack', subTitle: ''
  },
  {
    Id: 22, assignee: '',
    title: 'Leadership by the Book', isAvailable: true, owner: 'Amol Jadhav',
    author: 'Kenneth H. Blanchard, Bill Hybels, PHIL HODGES', subTitle: 'Tools to Transform Your Workplace'
  }



];

@Component({
  selector: 'app-book-board',
  templateUrl: './book-board.component.html',
  styleUrls: ['./book-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookBoardComponent implements OnInit {
  public myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = ['Id', 'title', 'isAvailable'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement: IBook;
  constructor() { }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
