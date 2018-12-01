import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // This will not work
    // this.router.navigate(['/server']);

    // If you use this.router.navigator(['server']);
    // No errors happen.
    // This is because unlike the routeLink, navigator doesn't 
    // Know which route you are currently on.
    // We should use ActivatedRoute to make Angular know which rotue I am 
    // currently on.

    //  this.router.navigate(['servers'], {relativeTo: this.activeRouter});
  }
}
