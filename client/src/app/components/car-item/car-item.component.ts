import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/Car';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
})
export class CarItemComponent implements OnInit {
  cars: Car[];
  car: Car;
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  deleteCar(number: number) {
    if (confirm('Do you really want to delete this car data?') == true) {
      this.carService.deleteCar(number).subscribe((car) => {
        this.getCars();
        M.toast({ html: 'Data deleted', classes: 'rounded' });
      });
    }
  }

  addCar(car: Car) {
    this.carService.addCar(car).subscribe((car) => {
      this.cars.push(car);
    });
    this.getCars();
    M.toast({ html: 'Data saved', classes: 'rounded' });
    location.reload();
  }
}
