import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDTO, CreateBookDTO, UpdateBookDTO } from '../interfaces/book.dto';
import { ApiResponse } from '../interfaces/book.dto';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  //endpoint hämta alla böcker
  private booksUrl = 'https://localhost:7158/api/books';

  private bookUrl = 'https://localhost:7158/api/book';


  constructor(private http: HttpClient) { }

  //Hämta alla böckerna
  getBooks(): Observable<ApiResponse<BookDTO[]>> {
    return this.http.get<ApiResponse<BookDTO[]>>(this.booksUrl);
  }

  //Hämta en specifik bok
  getBook(id: number): Observable<ApiResponse<BookDTO>>{
    return this.http.get<ApiResponse<BookDTO>>(`${this.bookUrl}/${id}`);
  }

  //Skapa ny bok
  createBook(book: CreateBookDTO): Observable<ApiResponse<BookDTO>>{
    return this.http.post<ApiResponse<BookDTO>>(this.bookUrl, book);
  }

  updateBook(book: UpdateBookDTO): Observable<ApiResponse<BookDTO>>{
    return this.http.put<ApiResponse<BookDTO>>(`${this.bookUrl}/${book.bookID}`, book);
  }

  deleteBook(id: number): Observable<ApiResponse<any>>{
    return this.http.delete<ApiResponse<any>>(`${this.bookUrl}/${id}`);
  } 
}
