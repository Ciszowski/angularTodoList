import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { todoModele } from 'src/app/modèle/todo.modele';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-single-view',
  templateUrl: './todo-single-view.component.html',
  styleUrls: ['./todo-single-view.component.css']
})
export class TodoSingleViewComponent implements OnInit {

  description : FormGroup;
  singleTodo : todoModele;
  editTrueFalse = false;
  idPage : number;
  constructor(private route: ActivatedRoute,
              private store: Store<any>,
              private formBuilder: FormBuilder) {} 

  ngOnInit(){
   this.idPage = this.route.snapshot.params['id']
    return new Promise((resolve, reject)=>{
      this.store.pipe(select('redTodo'))
      .subscribe((res)=>{
        this.singleTodo = res.todo.filter((el)=>el.id === Number(this.idPage))
        resolve(true)
      })
    }).then(()=>{
      this.initForm()
    })
  }
  descriptionEdit(){
    this.editTrueFalse = !this.editTrueFalse ? true : false
  }
  initForm(){
    if(this.singleTodo[0]){
      this.description = this.formBuilder.group({ description : this.singleTodo[0].description })
    }
  }
  submitDescription(){
    const description = this.description.get('description').value
    this.editTrueFalse = false;
    this.store.dispatch({type:"EDIT_DESCRIPTION", payload:{id : Number(this.idPage), description : description}})
  }

}


