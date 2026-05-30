import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { ThemeService } from '../../../theme-config.service';

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton implements OnInit {

  public lightMode: boolean | undefined;

  public themeSignal!: WritableSignal<string | null>;

  themeService = inject(ThemeService);

  ngOnInit() {

    this.themeSignal = this.themeService.getCurrentTheme();
    this.lightMode = this.themeSignal() === 'light-theme';
  }

  toggleTheme() {
    this.themeService.toggleThemeOnClick();
    this.themeSignal = this.themeService.getCurrentTheme();
    this.lightMode = this.themeSignal() === 'light-theme';
  }
}
