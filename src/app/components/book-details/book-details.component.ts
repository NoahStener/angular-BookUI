import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDTO } from '../../interfaces/book.dto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book: BookDTO | null = null;
  bookID: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ){
    this.bookID = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadBookDetails();
  }

  loadBookDetails(): void{
    this.bookService.getBook(this.bookID).subscribe(response => {
      if(response.isSuccess){
        this.book = response.result;
      }
      else{
        console.error('Failed to load book details:', response.errorMessages)
      }
    });
  }
}
