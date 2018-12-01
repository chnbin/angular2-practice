import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userActivated1 = false;
  userActivated2 = false;

  constructor(private usersServer: UsersService) {

  }

  ngOnInit() {
    this.usersServer.userActiveated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.userActivated1 = true;
        }

        if (id === 2) {
          this.userActivated2 = true;
        }
      }
    );
  }
}
