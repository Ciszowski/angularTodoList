import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServices } from 'src/app/services/auth.services';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  infoRegistration : string
  userForm: FormGroup;
  constructor( private store : Store<any>,
              private snackbar : MatSnackBar,
              private formBuilder: FormBuilder,
              private authServices: AuthServices,
              private dialogRef: MatDialogRef<SignUpComponent>,
              @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
    this.initForm()
    this.store.pipe(select('redAuth'))
    .subscribe((res)=>{
        this.infoRegistration = res.messageRegister
    })
  }
  initForm(){
    this.userForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/[a-zA-Z0-9]{6,}/)]]
    })
  }
  onSubmitForm(){
    const email = this.userForm.get('email').value
    const password = this.userForm.get('password').value
    this.authServices.registerUser(email,password)
      .then(()=>{
        this.dialogRef.close(this.infoRegistration)
      },(error)=>{
        this.dialogRef.close(this.infoRegistration)
      })
  }
  openSnackBar(message: string, action: string) {
    setTimeout(() => {
      this.snackbar.open(this.infoRegistration, action,{
        duration: 3000,
      });
    }, 1000);
  }
}
