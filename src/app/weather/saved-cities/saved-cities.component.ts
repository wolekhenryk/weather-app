import { Component, OnInit } from '@angular/core';
import { SavedWeatherService } from '../saved-weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ ngModel requires FormsModule
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css'],
})
export class SavedCitiesComponent implements OnInit {
  city: string = ''; // ✅ bound to input field
  weathers: any[] = [];

  constructor(private weatherService: SavedWeatherService) {}

  ngOnInit(): void {
    this.fetchWeathers();
  }

  fetchWeathers(): void {
    this.weatherService
      .getWeatherForAllSavedCities()
      .subscribe((data) => (this.weathers = data));
  }

  addCityAndRefresh(): void {
    if (!this.city.trim()) return;
    this.weatherService.saveCity(this.city.trim());
    this.city = '';
    this.fetchWeathers();
  }

  removeCity(city: string): void {
    this.weatherService.removeCity(city);
    this.fetchWeathers();
  }
}
