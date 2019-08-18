import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSingleViewComponent } from './todo-list/todo-single-view/todo-single-view.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';

const routes: Routes = [
  {path: "task", component: TodoListComponent},
  {path: 'task/single-view/:id', component: TodoSingleViewComponent},
  {path: 'task/add-task',component: AddTodoComponent},
  {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{};