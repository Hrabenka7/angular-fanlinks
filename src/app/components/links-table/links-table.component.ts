import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinksService } from '../../service/links.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-links-table',
  templateUrl: './links-table.component.html',
  styleUrls: ['./links-table.component.css']
})
export class LinksTableComponent implements OnInit {

  constructor(private route: ActivatedRoute, private linkservice: LinksService) { }

  @Output() linkClicked = new EventEmitter<Event>();

  categoryName: String;
  linksArray: Array<any>;

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name');
    this.linkservice.getFanLinks(this.categoryName).subscribe(data => {
      console.log('data', data);
      this.linksArray = data['entries'];
      console.log(this.linksArray);
    });
  }

  onClick(linkData) {
    console.log('event', linkData);
    this.linkClicked.emit(linkData);
  }

}



