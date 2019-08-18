import { Component } from '@angular/core';
import * as firebase from "firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAkjhHlRWDNRGYu8h2mubZlqrYO8rZrWK8",
      authDomain: "todolistapp-ae098.firebaseapp.com",
      databaseURL: "https://todolistapp-ae098.firebaseio.com",
      projectId: "todolistapp-ae098",
      storageBucket: "",
      messagingSenderId: "56063596396",
      appId: "1:56063596396:web:3d7cecbe34605d64"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
