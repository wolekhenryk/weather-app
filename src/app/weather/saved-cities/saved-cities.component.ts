import { Component, OnInit } from '@angular/core';
import { SavedWeatherService } from '../saved-weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css'],
})
export class SavedCitiesComponent implements OnInit {
  city: string = '';
  weathers: any[] = [];
  suggestions: any[] = [];
  debounceTimer: any;

  constructor(private weatherService: SavedWeatherService) {}

  ngOnInit(): void {
    this.fetchWeathers();
  }

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

  getAutoComplete(query: string): void {
    this.weatherService
      .getAutocomplete(query)
      .subscribe((data) => (this.suggestions = data));
  }

  selectSuggestion(suggestion: any): void {
    this.city = suggestion.name;
    this.suggestions = [];
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
