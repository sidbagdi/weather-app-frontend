import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
    
  }

  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>("http://localhost:8080/demo");
  // }

  getCurrentWeather(city: string):Observable<any>{
    return this.http.get("http://localhost:8080/currentWeather?city="+city);
    
  }

  getHistoricalWeather(lat:any,lon:any):Observable<any>{
    return this.http.get("http://localhost:8080/historicalWeather?lat="+lat+"&lon="+lon);
    
  }



}
