import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import {HttpClient} from "@angular/common/http" 


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "http://localhost:58702/api/brands/getall"
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)  
  }
}

