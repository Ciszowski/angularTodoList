import { Component, OnInit } from '@angular/core';
import { todoServices } from '../services/todo.services';
import {Store, select }  from "@ngrx/store";
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  constructor(private todoService : todoServices,
              private store : Store<any>,
              private route: Router) { }

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
  onSingleView(idx: number){
    this.route.navigate(['/task','single-view',this.todoList[idx].id])
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
      return 'darkblue'
    }else{
      return 'red'
    }
  }
  deleteAll(){
    this.store.dispatch({type:"DELETE_ALL"})
  }
  deleteThis(idx : number){
    this.store.dispatch({type:"DELETE_ONE" , payload: idx})
  }
}
