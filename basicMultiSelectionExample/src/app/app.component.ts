import { Component } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data" (userRowSelect)="onUserRowSelect($event)"></ng2-smart-table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings:Object;
  data:Object;
  public input: string = '<input type="checkbox"></input>';

  constructor(private _sanitizer: DomSanitizer) {
  this.settings = {
    columns: {
    username: {
      title: 'User Name'
    },
    checkbox: {
      title: 'Inactive',
      type: 'html',
      valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
      filter: false
    }
  }
};

this.data = [
  {
    username: "Bret",
    checkbox:'yes'
  },
  {
    username: "Antonette",
    checkbox:'no'
  }
]; 
}


onUserRowSelect(event){
    console.log(event.selected)

    for (var i=0;i<event.selected.length;i++){
        console.log(event.selected[i].name)
    }
  }


}