import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  buttonArray: Array<any>;

  ngOnInit() {
    this.buttonArray = [{ name: 'Animales', nameEng: 'animals'},
      { name: 'Libros', nameEng: 'books'},
      { name: 'Musica', nameEng: 'music'},
      { name: 'Salud', nameEng: 'health'}
  ];

    // if (sessionStorage.getItem('visitedUrls') === null) {
    //   console.log('entered sessionStorage');
    //   const visitedUrls = [];
    //   sessionStorage.setItem('visitedUrls', JSON.stringify(visitedUrls));
    // }

  }

}
