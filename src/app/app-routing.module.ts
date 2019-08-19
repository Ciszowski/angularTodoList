import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSingleViewComponent } from './todo-list/todo-single-view/todo-single-view.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { HomeComponent } from './home/home.component';
import { AuthServices } from './services/auth.services';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "task",canActivate:[AuthServices], component: TodoListComponent},
  {path: 'task/single-view/:id',canActivate:[AuthServices], component: TodoSingleViewComponent},
  {path: 'task/add-task', canActivate:[AuthServices],component: AddTodoComponent},
  {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{};