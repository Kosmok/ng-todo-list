import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAGiO7GlTzj4eVgWBjc8ntH0BqtzuPZnKY',
      authDomain: 'ng-test-1e5d1.firebaseapp.com'
    });
  }
}
