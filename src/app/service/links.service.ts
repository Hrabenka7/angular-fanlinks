import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


export class LinksService {
  constructor(private http: HttpClient, private location: Location) { }
  getFanLinks(category) {
    const observable = this.http.get(`https://api.publicapis.org/entries?category=${category}`);
    return observable;
  }

  navigateBack() {
    this.location.back();
  }
}
