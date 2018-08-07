import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';

import { SpotifyService } from '../SpotifyServices';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params=> {this.query = params['query'] || '';});
  }

  ngOnInit() {
  }

  submit(query:string): void{
    
  }
}
