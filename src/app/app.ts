import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeButton } from './header/theme-button/theme-button';
import { ThemeService } from '../theme-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private themeService: ThemeService) {}

  protected readonly title = signal('Portfolio-V2');

  ngOnInit(): void {
    this.themeService.themeInitCheck();
  }
}
