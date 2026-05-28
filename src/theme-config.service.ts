import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private currentTheme = signal(localStorage.getItem('themeOption'))

  toggleThemeOnClick() {

    if (this.currentTheme() === 'light-theme') {
      localStorage.setItem('themeOption', 'dark-theme');
      this.currentTheme.set('dark-theme');
      document.body.classList.add('dark-theme');
    } else {
      this.currentTheme.set('light-theme');
      localStorage.setItem('themeOption', 'light-theme');
      document.body.classList.remove('dark-theme');
    }

  }

  themeInitCheck() {

    if (this.currentTheme() === 'dark-theme') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

  }

}
