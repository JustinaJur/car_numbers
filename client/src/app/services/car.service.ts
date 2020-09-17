import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carsUrl: string = 'http://localhost:5000/plates';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  getCar(number: string): Observable<Car> {
    return this.http.get<Car>(`${this.carsUrl}/${number}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions);
  }

  updateCar(car: Car): Observable<Car> {
    const url = `${this.carsUrl}/${car.number}`;
    return this.http.put<Car>(url, car, httpOptions);
  }

  deleteCar(number: number): Observable<Car> {
    return this.http.delete<Car>(`${this.carsUrl}/${number}`);
  }
}
