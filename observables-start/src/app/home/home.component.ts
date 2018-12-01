import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  generatedNums: number[] = []
  constructor() { }

  ngOnInit() {
    const nums = Observable.interval(100);
    nums.subscribe(
      (num: number) => {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(`${num} generate ${dice}.`)
        this.generatedNums.push(dice);
        // console.log(this.generatedNums);
      }
    );
  }

}
