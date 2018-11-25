import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './Server.component.html'
})


export class ServerComponent {
  id = 10;
  status = 'off-line';

  constructor() {
  }

  getServerStatus() {
    return this.status;
  }
}
