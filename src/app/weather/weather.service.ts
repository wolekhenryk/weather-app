import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '2256fbde53934dee976102343251105';
  private baseCurrentWeatherUrl: string =
    'https://api.weatherapi.com/v1/current.json';
  private baseAutocompleteUrl: string =
    'https://api.weatherapi.com/v1/search.json';
  private baseForecastUrl: string =
    'http://api.weatherapi.com/v1/forecast.json';
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url: string = `${this.baseCurrentWeatherUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(url);
  }

  getForecast(city: string, days: number): Observable<any> {
    const url: string = `${this.baseForecastUrl}?key=${this.apiKey}&q=${city}&days=${days}`;
    return this.http.get<any>(url);
  }

  getAutocomplete(city: string): Observable<any> {
    const url: string = `${this.baseAutocompleteUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(url);
  }
}
