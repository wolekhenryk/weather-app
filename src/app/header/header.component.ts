import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  theme: string = 'auto';
  setTheme(mode: 'light' | 'dark' | 'auto') {
    this.theme = mode;
    document.body.setAttribute('data-bs-theme', mode);
  }
}
