//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from '@angular/cdk/layout';

//ngrx
import { StoreModule, Store } from "@ngrx/store";
import { ReducerAuth} from "./reducer/app.reducerAuth";
import  { StoreDevtoolsModule } from '@ngrx/store-devtools';

//material
import { MaterialModule } from 'src/material/material.module';

//Services
import { AuthServices } from './services/auth.services';
import { todoServices } from './services/todo.services';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignUpComponent } from './main-nav/sign-up/sign-up.component';
import { SignInComponent } from './main-nav/sign-in/sign-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReducerTodo } from './reducer/app.reducerTodo';
import { TodoSingleViewComponent } from './todo-list/todo-single-view/todo-single-view.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';

const reducers ={
  redAuth:  ReducerAuth,
  redTodo: ReducerTodo
}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignUpComponent,
    SignInComponent,
    TodoListComponent,
    TodoSingleViewComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'A wonderful toDo app',
      maxAge: 50,
    }),
    LayoutModule,
    HttpClientModule,

  ],
  entryComponents:[
    SignUpComponent,
    SignInComponent
  ],
  providers: [
    AuthServices,
    todoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
