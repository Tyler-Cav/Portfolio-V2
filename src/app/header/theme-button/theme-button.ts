import { Component } from '@angular/core';
import { ThemeService } from '../../../theme-config.service'

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton {

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleThemeOnClick();
  }

}
