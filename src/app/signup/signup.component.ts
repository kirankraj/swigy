import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  SignUp(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    let username = form.value.username;
    let phonenumber = form.value.phonenumber;
    let location = form.value.location;
    // console.log(email + password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
        // console.log(userData);
        let message = ` notification has been sent to your mail address ${email}, please verify`;
        this.toastr.success(message);
        this.router.navigate(["/login"]);

        return firebase
          .database()
          .ref("/user" + userData.user.uid)
          .set({
            phonenumber,
            email,
            location,
            username,
            password,
            uid: userData.user.uid,
            registrationDate: new Date().toString()
          });
      })
      .catch(err => {
        this.toastr.error(err.message);
        console.log(err);
      });
  }

  ngOnInit() {}
}
