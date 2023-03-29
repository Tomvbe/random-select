import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fields = this.getDefaultFields();
  result = this.getDefaultResult();
  seq = this.getDefaultSequence();

  add() {
    const newSeq = ++this.seq;
    this.fields.push({id: 'input'+newSeq, value: ""});
    setTimeout(() => (document.querySelector('#input'+newSeq) as any).focus(), 0);
  }

  submit() {
    const index = Math.floor(Math.random() * this.fields.length);
    this.result = this.fields[index].value;
  }

  reset() {
    this.result = this.getDefaultResult();
    this.seq = this.getDefaultSequence();
    this.fields = this.getDefaultFields();
    setTimeout(() => (document.querySelector('#input'+0) as any).focus(), 0);
  }

  getDefaultFields() {
    return [{id: 'input' + 0, value: ""}];
  }

  getDefaultSequence() {
    return 0;
  }

  private getDefaultResult() {
    return '';
  }

}

