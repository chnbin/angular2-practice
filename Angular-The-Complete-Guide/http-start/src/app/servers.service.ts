import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServersService {
  url = 'https://api-project-463372326000.firebaseio.com/data.json';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {

  }

  storeServers(servers: any[]) {
    return this.http.post(this.url, servers, {headers: this.headers});
  }

  getServers() {
    return this.http.get(this.url);
  }
}
