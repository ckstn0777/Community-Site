import { Component, OnInit } from '@angular/core';
import { Nav } from './nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  catergory: any;

  constructor() {

  }

  ngOnInit() {
    const nav = new Nav();
    this.catergory = nav.catergory;
  }
}
