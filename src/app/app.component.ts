import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fields = [{value: ""}];
  result: string | undefined;


  add() {
    this.fields.push({value: "" });
  }

  submit() {
    const index = Math.floor(Math.random() * this.fields.length);
    this.result = this.fields[index].value;
  }

}
