import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  @Input() city: string = '';
  @Input() days: number = 7;

  forecast: any;

  constructor(private weather: WeatherService) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getForecast(this.city, this.days);
  // }

  getForecast(city: string, days: number = 7): void {
    this.weather.getForecast(city, days).subscribe((data) => {
      console.log('Forecast data:', data);
      this.forecast = data;
    });
  }
}
