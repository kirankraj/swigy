import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "NewProject";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyDTgvk_WLThtMphPd7o8UzPuLL5j8e741k",
      authDomain: "swiggy-d2eb1.firebaseapp.com",
      databaseURL: "https://swiggy-d2eb1.firebaseio.com",
      projectId: "swiggy-d2eb1",
      storageBucket: "swiggy-d2eb1.appspot.com",
      messagingSenderId: "672001568516",
      appId: "1:672001568516:web:61779e0b55262fbaf1ea51"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  constructor() {}
}
