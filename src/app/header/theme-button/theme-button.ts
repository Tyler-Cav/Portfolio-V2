import { Component, OnInit, WritableSignal, inject, viewChild, ElementRef, signal } from '@angular/core';
import { ThemeService } from '../../../theme-config.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-theme-button',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton implements OnInit {

  public lightMode: boolean | undefined;

  public themeSignal!: WritableSignal<string | null>;

  public bulbSource = signal<string>("");

  public bulbSources = {
    staticLight: 'Test-LightBulb-Frame1.svg',
    staticDark: 'Test-Darkbulb-Frame-1.svg',
    animatedLight: 'Test-Lightbulb-Frame-2.svg',
    animatedDark: 'Test-Darkbulb-Frame-2.svg'
  };

  themeService = inject(ThemeService);

  ngOnInit() {

    this.themeSignal = this.themeService.getCurrentTheme();
    if (this.lightMode) {
      this.themeSignal() === 'light-theme';
      this.bulbSource.set(this.bulbSources.staticLight);
    } else {
      this.bulbSource.set(this.bulbSources.staticDark);
    }
  }

  changeBulb(event: Event) {
    if (event.type === 'mouseup') {
      this.themeService.toggleThemeOnClick();
      this.themeSignal = this.themeService.getCurrentTheme();
      this.lightMode = this.themeSignal() === 'light-theme';
      if (this.lightMode) {
        this.bulbSource.set(this.bulbSources.staticLight);
      } else {
        this.bulbSource.set(this.bulbSources.staticDark);
      }
    } else if (event.type === 'mousedown') {
      if (this.lightMode) {
        this.bulbSource.set(this.bulbSources.animatedLight);
      } else {
        this.bulbSource.set(this.bulbSources.animatedDark);
      }
    }
  }
}
