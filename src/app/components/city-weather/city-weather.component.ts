import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  @Input() cityData: any;
  cityName = "";
  icon="";
  imgpath= ""
  constructor() { }

  // handleCityData(e: Event){
  //   console.log(e);
  // }
  ngOnInit(): void {
    console.log("In Init")
    console.log(this.cityData);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("In Changes");
    this.cityData=changes.cityData.currentValue;
    console.log(this.cityData);
    this.icon = this.cityData.weather[0].icon;
    this.imgpath="http://openweathermap.org/img/wn/"+this.icon+"@2x.png"
  }

}
