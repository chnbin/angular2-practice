import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {
  username = '';
  isLocked = true;
  addStatus = '';

  constructor() { }

  ngOnInit() {
  }

  updateUserName(event: Event) {
    console.log('Input');
    this.username = (<HTMLInputElement>event.target).value;

    if (this.username === '') {
      this.isLocked = true;
    } else {
      this.isLocked = false;
    }
  }

  addUser() {
    this.addStatus = `${this.username} is added.`;
    this.username = '';
    this.isLocked = true;
  }
}
