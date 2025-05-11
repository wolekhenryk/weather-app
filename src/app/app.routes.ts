import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather/weather.component';
import { SavedCitiesComponent } from './weather/saved-cities/saved-cities.component';

export const routes: Routes = [
  { path: 'city-weather', component: WeatherComponent },
  { path: 'saved-weather', component: SavedCitiesComponent },
  { path: '', redirectTo: 'city-weather', pathMatch: 'full' },
];
