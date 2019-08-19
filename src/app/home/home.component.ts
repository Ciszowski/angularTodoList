import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor() {}
  top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
