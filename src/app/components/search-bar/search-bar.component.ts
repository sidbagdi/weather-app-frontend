import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardShortcutHandler(event);
  }

  cityName : string = "";
  cityData : any = {};
  

  @Output('cityName') cityname = new EventEmitter();
  constructor(private apiService: ApiService) { 

  }

  keyboardShortcutHandler(event: KeyboardEvent) {
    if (event.code === 'Enter') {   // ctrl+D - Deselect all clips and frames
      this.apiService.getCurrentWeather(this.cityName).subscribe(cityData => {
        this.cityData = cityData;
        console.log(this.cityData.coord.lat);
          if(this.cityData){
          this.cityname.emit(this.cityData);
        }
      });

      
      
      event.preventDefault();
    }
  }

  ngOnInit(): void {



  }

}
