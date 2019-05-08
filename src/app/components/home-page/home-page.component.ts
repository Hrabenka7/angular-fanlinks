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
    this.buttonArray = [{ name: 'Animales', link: 'https://en.wikipedia.org/wiki/Animal'},
      { name: 'Libros', link: 'https://en.wikipedia.org/wiki/Book'},
      { name: 'Musica', link: 'https://en.wikipedia.org/wiki/Music'},
      { name: 'Salud', link: 'https://en.wikipedia.org/wiki/Health'}
  ];
  }

}
