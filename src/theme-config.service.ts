import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme = signal(localStorage.getItem('themeOption'));

  toggleThemeOnClick() {
    if (this.currentTheme() === 'dark-theme') {
      localStorage.setItem('themeOption', 'light-theme');
      this.currentTheme.set('light-theme');
      document.body.classList.add('light-theme');
    } else {
      this.currentTheme.set('dark-theme');
      localStorage.setItem('themeOption', 'dark-theme');
      document.body.classList.remove('light-theme');
    }
  }

  themeInitCheck() {
    if (this.currentTheme() === 'light-theme') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }
}
