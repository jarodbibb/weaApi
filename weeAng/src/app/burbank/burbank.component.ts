import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    var city = 'burbank';
    let observable = this._httpService.getCityW({city: city});
    observable.subscribe(data => {
      console.log(data)
    })
    
  }

}
