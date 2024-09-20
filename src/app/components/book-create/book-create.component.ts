import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CreateBookDTO } from '../../interfaces/book.dto';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  createBookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router)
  {
    this.createBookForm = this.fb.group({
      title:['',[Validators.required, Validators.maxLength(25)]],
      author:['', [Validators.required, Validators.maxLength(50)]],
      yearOfRelease:['', Validators.required],
      genre:['', Validators.required],
      description:['', Validators.required],
      isAvaliable: [true]
    });
  }

  onSubmit(){
    if(this.createBookForm.valid){
      const newBook: CreateBookDTO = this.createBookForm.value;
      this.bookService.createBook(newBook).subscribe(() => {
        this.router.navigate(['/books'])
      });
    }
  }

}
