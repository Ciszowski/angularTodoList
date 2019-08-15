//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { FormsModule, ReactiveFormsModule} from '@angular/forms';

//ngrx
import { StoreModule, Store } from "@ngrx/store";
import { Reducer} from "./reducer/app.reducer";
import  { StoreDevtoolsModule } from '@ngrx/store-devtools';

//material
import { MaterialModule } from 'src/material/material.module';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({appState : Reducer}),
    StoreDevtoolsModule.instrument({
      name: 'A wonderful toDo app',
      maxAge: 50,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
