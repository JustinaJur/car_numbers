import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css'],
})
export class FindCarComponent implements OnInit {
  number: string = '';
  name: string = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  findCar() {
    this.carService.getCar(this.number).subscribe((car) => {
      this.name = car[0]?.owner_name || 'No results';
    });
  }
}
