import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './Server.component.html'
})


export class ServerComponent {
  id = 10;
  serverName = '';
  status = 'off-line';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.status;
  }

  getServerStatusColor() {
    const fontColor = this.status === 'online' ? 'white' : 'black';
    const bgColor = this.status === 'online' ? 'green' : 'grey';
    const colorStyle = {
      'color': fontColor,
      'background': bgColor
    };

    return colorStyle;
  }
}
