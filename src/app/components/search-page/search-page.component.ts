import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }
  cityDataFetched : boolean = false;
  cityData = {}

  handleCityData(e: Event){
    console.log(e);
    this.cityData=e;
    this.cityDataFetched=true;
  }

  ngOnInit(): void {
  }

}
