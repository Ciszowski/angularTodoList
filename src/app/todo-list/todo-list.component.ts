import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { todoServices } from '../services/todo.services';
import {Store, select }  from "@ngrx/store";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  constructor(private todoService : todoServices,
              private store : Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('redTodo'))
    .subscribe((res)=>{
        this.todoList = res.todo;
      })
  }
  isChecked(idx: number){
    if(this.todoList[idx].done){
      return this.todoService.todoUnchecked(idx);
    }
    return this.todoService.todoIsChecked(idx);
  }
  getDeco(idx: number){
    if(this.todoList[idx].done === false){
      return 'inherit'
    }else{
      return 'line-through'
    }
  }
  getColor(idx: number){
    if(this.todoList[idx].done === false){
      return 'blue'
    }else{
      return 'red'
    }
  }
}
