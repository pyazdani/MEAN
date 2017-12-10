import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  on = false;
  users = [];
  onSubmit(myform) {
    console.log(this.user);
    this.users.push(this.user);
    console.log(this.users);
    this.on = true;
    // myform.resetForm();
    myform.form.markAsPristine();
    myform.form.markAsUntouched();
    this.user = new User();
  }
}
