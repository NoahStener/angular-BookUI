import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

export const routes: Routes = [
    {path: 'books', component: BookListComponent},
    {path: 'create', component: BookCreateComponent},
    {path: 'edit/:id', component: BookEditComponent},
    {path: '', redirectTo: '/books', pathMatch: 'full'}
];
