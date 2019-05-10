import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LinksService {
  constructor(private http: HttpClient) { }
  getFanLinks(category) {
    const observable = this.http.get(`https://api.publicapis.org/entries?category=${category}`);
    return observable;
  }
}
