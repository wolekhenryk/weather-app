import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-condition-card',
  imports: [],
  templateUrl: './condition-card.component.html',
  styleUrl: './condition-card.component.css',
})
export class ConditionCardComponent {
  @Input() imgSrc: string = '';
}
