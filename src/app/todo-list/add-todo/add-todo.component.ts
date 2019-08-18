import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { todoServices } from 'src/app/services/todo.services';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  addTodo :FormGroup;
  constructor(private route: Router,
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private todoService: todoServices) {}

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.addTodo = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['']
    })
  }
  addNewTodo(){
    const title = this.addTodo.get('title').value
    const description = this.addTodo.get('description').value
    this.todoService.addNewTask(title,description)
    this.route.navigate(['task'])
  }

}
