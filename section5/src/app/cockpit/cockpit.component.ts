import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { 

  }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: serverContent.value
    });
  }

  onAddBlueprint(blueprintName: HTMLInputElement, blueprintContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: blueprintName.value,
      content: blueprintContent.value
    });
  }
}
