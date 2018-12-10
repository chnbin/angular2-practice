import { Component } from '@angular/core';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServersService) {

  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onStoreServer() {
    this.serversService.storeServers(this.servers)
      .subscribe((resp) => {
        console.log(resp);
      }, (error) => {
        console.log(error);
      });
  }

  onGetServer() {
    this.serversService.getServers()
      .subscribe((resp) => {
        // resp is object now...
        for (const key of Object.keys(resp)) {
          for (const server of resp[key]) {
            this.servers.push(server);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
