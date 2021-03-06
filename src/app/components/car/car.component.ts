import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = []
  constructor(private carservice:CarService) { }

  ngOnInit(): void {
    this.getBrands()
  }
  getBrands() {
    this.carservice.getBrands().subscribe(response=>
    {this.cars = response.data})
  }
}
