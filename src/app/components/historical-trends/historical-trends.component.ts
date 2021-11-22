import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-historical-trends',
  templateUrl: './historical-trends.component.html',
  styleUrls: ['./historical-trends.component.scss']
})
export class HistoricalTrendsComponent implements OnInit {  


  @Input() cityData: any;
  cityName = "";
  icon="";
  imgpath= ""
  historicalData:any={};
  constructor(private apiService: ApiService) { }

  public chartType: string = 'line';
  tempList: Array<any>=[];
  dayList: Array<any>=[];

  public chartDatasets: Array<any> = [
    { data: [1,2,3,4], label: 'Temperature variation over 5 days : 120 hours' }
  ];

  

   public chartLabels: Array<any> = [];
   


  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  // handleCityData(e: Event){
  //   console.log(e);
  // }
  ngOnInit(): void {
    

  }

  ngOnChanges(changes: SimpleChanges) {
     console.log("In Changes");
     this.cityData=changes.cityData.currentValue;
     console.log("In Init of Historical")
      console.log(this.cityData);
      this.apiService.getHistoricalWeather(this.cityData.coord.lat,this.cityData.coord.lon).subscribe(historicalData => {
      this.historicalData = historicalData;
      console.log(historicalData[0]);
      this.tempList=[]
      this.dayList=[]
      for(let i=0; i<historicalData.length;i++){
          this.tempList.push(historicalData[i].temperature);
          this.dayList.push(historicalData[i].date);
      }
      console.log(this.tempList);
      
      this.chartDatasets = this.tempList;
      // this.chartLabels = this.dayList;
      if(this.chartLabels.length==0)
      for(let i=0;i<120;i++){
        this.chartLabels.push(i);
      }

      this.ngOnInit();
    });

    
    
  }
}
