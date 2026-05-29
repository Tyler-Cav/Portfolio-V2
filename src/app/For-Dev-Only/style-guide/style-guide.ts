import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide',
  imports: [],
  templateUrl: './style-guide.html',
  styleUrl: './style-guide.css',
})
export class StyleGuide {
  public fontSizeTypes: string[] = [
    '--size--2',
    '--size--1',
    '--size-0',
    '--size-1',
    '--size-2',
    '--size-3',
    '--size-4',
    '--size-5',
  ];

  public coreColors = [
    '--core-color-50',
    '--core-color-100',
    '--core-color-200',
    '--core-color-300',
    '--core-color-400',
    '--core-color-500',
    '--core-color-600',
    '--core-color-700',
    '--core-color-800',
    '--core-color-900',
    '--core-color-950',
  ];
}
