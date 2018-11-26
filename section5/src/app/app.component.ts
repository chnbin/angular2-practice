import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // ViewEncapsulation https://angular.io/api/core/ViewEncapsulation 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: 'Server', name: 'Test Server', content: 'For test'}];

  onServerCreated(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
    console.log(this.serverElements);
  }
  onBlueprintCreate(blueprintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
