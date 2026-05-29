import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ThemeService } from '../theme-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage],
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
