import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numSubscription: Subscription;
  customSubscription: Subscription;
  formClickSubscription: Subscription;

  showText = '';

  generatedNums: number[] = [];
  constructor() { }

  ngOnInit() {
    const nums = Observable.interval(10000).map(
      (value: number) => {
        return Math.floor(Math.random() * 6) + 1;
      }
    );
    this.numSubscription = nums.subscribe(
      (num: number) => {
        // let dice = Math.floor(Math.random() * 6) + 1;
        console.log(num)
        this.generatedNums.push(num);
        // console.log(this.generatedNums);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('1st package');
      }, 2000);

      setTimeout(() => {
        observer.next('2nd package');
      }, 4000);

      setTimeout(() => {
        observer.error('This dose error');
      }, 5000);
    });

    this.customSubscription = myObservable.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => { console.log('Complete'); }
    );

    const formClickObservable = Observable.fromEvent(document.body, 'click');
    this.formClickSubscription = formClickObservable.subscribe(() => {
      console.log('Form click');
    });


  }

  ngOnDestroy() {
    this.numSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
