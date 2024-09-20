import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { UpdateBookDTO } from '../../interfaces/book.dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit{
  editBookForm: FormGroup;
  bookID: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private bookService: BookService, private router: Router){
    this.bookID = this.route.snapshot.params['id'];

    //definera formbuilder group för bokens egenskaper
    this.editBookForm = this.fb.group({
      title:['',[Validators.required, Validators.maxLength(25)]],
      author:['',[Validators.required, Validators.maxLength(50)]],
      yearOfRelease:['', Validators.required],
      genre: ['', Validators.required],
      description:['', Validators.required],
      isAvaliable:[true]
    });
  }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(): void{
    this.bookService.getBook(this.bookID).subscribe(response => {
      if(response.isSuccess){
        //fyller i editBookForm med bokens data
        this.editBookForm.patchValue(response.result);
      }
      else{
        console.error('Failed to load book:', response.errorMessages);
      }
    });
  }

  onSubmit(): void {
    if(this.editBookForm.valid){
      const updatedBook: UpdateBookDTO = {bookID: this.bookID, ...this.editBookForm.value};
      this.bookService.updateBook(updatedBook).subscribe(() => {
        this.router.navigate(['/books']);
      })
    }
  }

  
}
