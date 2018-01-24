import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  humidity : number;
  AvTemp: number;
  HighTemp: number;
  LowTemp: number;
  status: string;
  image: string;

  constructor(private _httpService: HttpService) {
    this.image = "/../../assets/img/pexels-photo-462331.jpg"
  }

  ngOnInit() {
    var city = 'milpitas';
    let observable = this._httpService.getCityW({city: city});
    observable.subscribe(data => {
      console.log(data)
      this.humidity = Math.floor(data.main.humidity);
      this.AvTemp = Math.floor(data.main.temp);
      this.LowTemp = Math.floor(data.main.temp_min);
      this.HighTemp = data.main.temp_max;
      this.status = data.weather[0].main;
      
    })
    
  }

}
