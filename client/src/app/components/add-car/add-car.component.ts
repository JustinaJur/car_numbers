import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  @Output() addCar: EventEmitter<any> = new EventEmitter();
  name: string;
  number: number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const car = {
      name: this.name,
      number: this.number,
    };
    this.addCar.emit(car);
  }
}
