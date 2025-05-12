import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  imports: [CommonModule],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.css',
})
export class GenericCardComponent {
  @Input() title: string = '';
  @Input() mainValue: string = '';
  @Input() subTitle: string = '';
  @Input() subValue: string = '';
}
