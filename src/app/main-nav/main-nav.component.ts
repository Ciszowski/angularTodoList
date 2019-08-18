import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../services/auth.services';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  isConnected : boolean;
  resultRegistered : string;

  constructor(private authServices:  AuthServices,
              private route : Router,
              private store: Store<any>,
              public dialog: MatDialog) {}
  
  ngOnInit(){
    this.store.pipe(select('redAuth'))
    .subscribe((res)=>{
        this.authServices.isAuth = res.auth;
      })
  }
  subscribe(): void {
    const dialogRef = this.dialog.open(SignUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.resultRegistered= result
    });
  }
  
  onLogIn(){
    const dialogRef = this.dialog.open(SignInComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.isConnected= this.authServices.isAuth
      if(this.isConnected){
        this.route.navigate(['toDo']);
      }
    })
  }
  onLogOut(){
    this.authServices.onLogOut()
    this.isConnected= this.authServices.isAuth
    this.route.navigate([''])
  }
}
