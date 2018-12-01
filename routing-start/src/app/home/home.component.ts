import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer () {
    // relative path
    // this.router.navigate(['servers']);

    // absolute path
    this.router.navigate(['/servers']);
  }

  onLoadServer2 (id: number) {
    this.router.navigate(['/servers', id, 'edit'],
                         {queryParams: {allowEdit:'1'},
                                       fragment: 'loading'}
    );
  }
}
