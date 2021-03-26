import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "http://localhost:58702/api/cars/getall"

  constructor(private httpclient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Car>> {
    return this.httpclient.get<ListResponseModel<Car>>(this.apiUrl)  
  }
}
