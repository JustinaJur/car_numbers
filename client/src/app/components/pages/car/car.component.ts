import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { Router } from '@angular/router';
import { Car } from '../../../models/Car';

declare var M: any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car: Car;
  name: string;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.id = id;
    this.getCar(id);
  }

  getCar(id: string) {
    this.carService.getCar(id).subscribe((car) => {
      this.car = car;
    });
  }

  updateCar() {
    const car = {
      name: this.name,
      number: this.id,
    };
    this.carService.updateCar(car).subscribe((car) => {
      this.car = car;
    });
    M.toast({ html: 'Data updated', classes: 'rounded' });
    this.router.navigate(['/']);
  }
}
