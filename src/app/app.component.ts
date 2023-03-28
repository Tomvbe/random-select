import {Component, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fields = [{id: 'input'+0, value: ""}];
  result!: string;

  seq = 0;

  constructor(private renderer: Renderer2) {}

  add() {
    const newSeq = ++this.seq;
    this.fields.push({id: 'input'+newSeq, value: ""});
    setTimeout(() => (document.querySelector('#input'+newSeq) as any).focus(), 0);
  }

  submit() {
    const index = Math.floor(Math.random() * this.fields.length);
    this.result = this.fields[index].value;
  }

}
