import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  imports: [],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css',
})
export class TemperatureComponent {
  @Input() avgTemp: number = 0;
  @Input() minTemp: number = 0;
  @Input() maxTemp: number = 0;

  get avgPercent(): number {
    return (
      ((this.avgTemp - this.minTemp) / (this.maxTemp - this.minTemp)) * 100
    );
  }
}
