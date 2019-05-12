import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    if (sessionStorage.getItem('visitedUrls') === null) {
      const visitedUrls = [];
      sessionStorage.setItem('visitedUrls', JSON.stringify(visitedUrls));
    }
  }
}
