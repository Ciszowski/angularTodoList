import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServices } from 'src/app/services/auth.services';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userSign: FormGroup;
  constructor( private formBuilder: FormBuilder,
                private authService : AuthServices,
                private dialogRef: MatDialogRef<SignInComponent>,
                @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.userSign = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/[a-zA-Z0-9]{6,}/)]]
    })
  }
  onSubmitForm(){
    const email = this.userSign.get('email').value
    const password = this.userSign.get('password').value
    this.authService.onLogIn(email,password).then((res)=>{
      console.log('reponse', res)
      this.dialogRef.close()
    },()=>{
      this.dialogRef.close()
    })
  }
}
