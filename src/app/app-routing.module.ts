import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSingleViewComponent } from './todo-list/todo-single-view/todo-single-view.component';

const routes: Routes = [
  {path: "toDo", component: TodoListComponent},
  {path: 'toDo/single-view/:id', component: TodoSingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{};