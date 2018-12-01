import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createSreverStatus = 'No server created now.';
  isShowCreateSreverStatus = false;
  servers = ['ServerTest1', 'ServerTest2'];
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  createServer() {
    this.isShowCreateSreverStatus = true;
    this.servers.push(this.serverName);
    this.createSreverStatus = `Server ${this.serverName} created.`;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
