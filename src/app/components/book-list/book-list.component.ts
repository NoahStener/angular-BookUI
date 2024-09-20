import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { BookDTO } from '../../interfaces/book.dto';
import { RouterModule } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:BookDTO[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.getBooks().subscribe(response => {
      if(response.isSuccess){
        console.log(response);
        this.books = response.result;
      }
      else{
        console.error(response.errorMessages)
      }
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(response => {
      if(response.isSuccess){
        this.books = this.books.filter(book => book.bookID !== id);
      }
      else{
        console.error(response.errorMessages);
      }
    });
  }  

}
