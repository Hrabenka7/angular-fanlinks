import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit {

  categoryName: string;

  constructor(private route: ActivatedRoute, private location: Location) { }

  public clickedLink: Event;

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name');
  }

  childLinkClicked(linkData) {
    console.log('child event', linkData);
    this.clickedLink = linkData;
  }

  navigateBack() {
    this.location.back();
  }

}


