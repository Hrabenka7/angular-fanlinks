import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../service/links.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private linkService: LinksService) { }

  buttons: Array<any>;

  ngOnInit() {
    this.buttons = this.linkService.categories;
  }

}
