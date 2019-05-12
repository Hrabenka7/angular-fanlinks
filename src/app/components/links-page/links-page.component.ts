import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from '../../service/links.service';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit {

  categoryName: string;
  heading: string;

  constructor(private route: ActivatedRoute, private linkService: LinksService) { }

  public clickedLink: Event;

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name');

    this.linkService.categories.filter( el => {
      if (el.nameEng === this.categoryName) {
        this.heading = el.name;
      }

    });
    console.log('heading', this.heading);

    const visitedUrls = JSON.parse(sessionStorage.getItem('visitedUrls'));

    const exist = visitedUrls.find(url => {
      return url === this.categoryName;
    });

    if (!exist) {
      visitedUrls.push(this.categoryName);
      sessionStorage.setItem('visitedUrls', JSON.stringify(visitedUrls));
    }

  }

  childLinkClicked(linkData) {
    console.log('child event', linkData);
    this.clickedLink = linkData;
  }

  navigateBack() {
    this.linkService.navigateBack();
  }

}


