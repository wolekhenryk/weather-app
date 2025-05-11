import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, ForecastComponent],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: any;
  city: string = '';
  suggestions: any[] = [];
  debounceTimer: any;
  days: number = 7;

  constructor(private weatherService: WeatherService) {}

  @ViewChild(ForecastComponent) forecastComponent!: ForecastComponent;

  onInputChange(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      const trimmed = this.city.trim();
      if (trimmed.length >= 2) {
        this.getAutoComplete(trimmed);
      } else {
        this.suggestions = [];
      }
    }, 300);
  }

  ngOnInit(): void {
    const storedCity = localStorage.getItem('city');
    if (storedCity) {
      this.city = storedCity;
    } else {
      this.city = 'London';
    }
    this.searchWeather(this.city);
  }

  searchWeather(city: string = this.city): void {
    if (!city.trim()) return;
    localStorage.setItem('city', city);
    this.weatherService.getWeather(city).subscribe((data) => {
      this.weather = data;
    });

    this.forecastComponent.getForecast(city, this.days);
  }

  getAutoComplete(query: string): void {
    this.weatherService
      .getAutocomplete(query)
      .subscribe((data) => (this.suggestions = data));
  }

  selectSuggestion(suggestion: any): void {
    this.city = suggestion.name;
    this.suggestions = [];
    this.searchWeather();
  }
}
