import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') content: ElementRef;

  constructor() { 

  }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.content.nativeElement.value
    });
  }

  onAddBlueprint(blueprintName: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: blueprintName.value,
      content: this.content.nativeElement.value
    });
  }
}
