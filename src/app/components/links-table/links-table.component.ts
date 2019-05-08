import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-table',
  templateUrl: './links-table.component.html',
  styleUrls: ['./links-table.component.css']
})
export class LinksTableComponent implements OnInit {

  constructor() { }

  sampleArray: Array<any>;

  ngOnInit() {
    this.sampleArray = [{ name: 'Nombre 1', desc: 'Description 1' }, {
      name: 'Nombre 2', desc: 'Description 2'},
      { name: 'Nombre 3', desc: 'Description 3' }, {
        name: 'Nombre 4', desc: 'Description 4'}];
  }

}
