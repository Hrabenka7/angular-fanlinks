import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../service/links.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private linkService: LinksService) { }

  ngOnInit() {
  }

  navigateBack() {
    this.linkService.navigateBack();
  }
}
