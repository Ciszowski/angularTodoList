import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from "firebase";
import { Store } from '@ngrx/store';

export class AuthServices implements CanActivate {
    isAuth: boolean;
    constructor(private store: Store<any>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | boolean {
        if (this.isAuth) {
            return true
        }
        return false
    }
    registerUser(email: string, password: string) {
        console.log('userService', email, password)
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    this.store.dispatch({ type: "REGISTRATION", payload: "User has been registered" })
                    resolve()
                }, (error) => {
                    this.store.dispatch({ type: "REGISTRATION", payload: error.message })
                    reject(error)
                })
        })
    }

    onLogIn(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((res) => {
                    this.store.dispatch({ type: "LOGIN_IN"});
                    resolve(true)
                },(error)=>{
                    reject(error)
                })
        })
    }
    onLogOut() {
        firebase.auth().signOut();
        this.store.dispatch({ type: "LOGIN_OUT" });
    }
}