import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../weather.service';
import { TemperatureComponent } from '../temperature/temperature.component';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule, TemperatureComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent implements OnInit {
  @Input() city: string = '';
  @Input() days: number = 7;

  forecast: any;

  constructor(private weather: WeatherService) {}
  ngOnInit(): void {
    this.getForecast(this.city, this.days);
  }

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
