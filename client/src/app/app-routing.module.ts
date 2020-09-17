import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarItemComponent } from './components/car-item/car-item.component';
import { CarComponent } from './components/pages/car/car.component';

const routes: Routes = [
  {
    path: '',
    component: CarItemComponent,
  },
  { path: 'car/:id', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
