import { Component, OnInit } from '@angular/core';
import cards from './apps.card-data.json';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit {
  appCards: any[];
  constructor() { }

  ngOnInit(): void {
    this.appCards = cards;
    console.log(this.appCards);
  }

}
