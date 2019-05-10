import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrls: ['./links-detail.component.css']
})
export class LinksDetailComponent implements OnInit {

  @Input() passedLinkData: Event;

  constructor() { }

  ngOnInit() {
  }

}



