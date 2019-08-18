import { todoModele } from '../modèle/todo.modele';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Injectable()
export class todoServices {

  constructor(private store: Store<any>) {
    this.store.dispatch({ type: "TODO", payload: this.todo })
    this.store.pipe(select('redTodo'))
      .subscribe((res) => {
        this.todo = res.todo;
      })
  }

  private todo: todoModele[] = [
    {
      id: 0,
      title: 'Make a Todo List',
      description: 'A beautiful app creating with angular library',
      done: false,
    },
    {
      id: 1,
      title: 'Take a coffee',
      description: 'Best juice ever !',
      done: false,
    },
    {
      id: 2,
      title: 'Give pate at the cat',
      description: 'Just a wonderful cat when she wants *',
      done: false,
    },
    {
      id: 3,
      title: 'Do Sport',
      description: 'To liberate you mind',
      done: false,
    },
    {
      id: 4,
      title: 'No forget to rest',
      description: 'Can be useful',
      done: false,
    }, 
  ]

  todoIsChecked(idx: number) {
    this.todo[idx].done = true;
    const newTodo = []
    newTodo.push(this.todo[idx])
    for (let i = 0; i < this.todo.length; i++) {
      if (i !== idx) {
        newTodo.push(this.todo[i])
      }
    }
    this.store.dispatch({ type: "CHANGE_POS", payload: newTodo });
  }

  todoUnchecked(id: number) {
    this.todo[id].done = false;
    const newTodo= [];
    const newObj = this.todo.filter((el, idx)=>{
      if(id !== idx){
        return el
      }
    })
    let val = 1
    for(let i= 0 ; i < newObj.length; i ++){
      if(newObj[i].done === true){
        newTodo.push(newObj[i])
      }else if(this.todo[id].id < newObj[i].id && val === 1 ){
        val --
        newTodo.push(this.todo[id])
        newTodo.push(newObj[i])
      }else if(!newObj[i+1] && val === 1){
        newTodo.push(newObj[i])
        newTodo.push(this.todo[id])
      }else{
        newTodo.push(newObj[i])
      }
    }
    this.store.dispatch({ type: "CHANGE_POS", payload: newTodo });
  }

  addNewTask(title: string, description: string){
    this.store.dispatch({ 
          type: "ADD_TASK", payload: 
          {id: this.todo.length ,
            title: title,
            description : description, 
            done : false }});
  }

}