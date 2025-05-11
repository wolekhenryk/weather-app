import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedWeatherService {
  constructor(private weather: WeatherService) {}

  getSavedCities(): string[] {
    const savedCities = localStorage.getItem('savedCities');
    return savedCities ? JSON.parse(savedCities) : [];
  }

  getWeatherForAllSavedCities(): Observable<any[]> {
    const cities = this.getSavedCities();
    const requests = cities.map((city) => this.weather.getWeather(city));
    return forkJoin(requests);
  }

  saveCity(city: string): void {
    const savedCities = this.getSavedCities();
    if (!savedCities.includes(city)) {
      savedCities.push(city);
      localStorage.setItem('savedCities', JSON.stringify(savedCities));
    }
  }

  removeCity(city: string): void {
    const savedCities = this.getSavedCities();
    const index = savedCities.indexOf(city);
    if (index > -1) {
      savedCities.splice(index, 1);
      localStorage.setItem('savedCities', JSON.stringify(savedCities));
    }
  }
}
