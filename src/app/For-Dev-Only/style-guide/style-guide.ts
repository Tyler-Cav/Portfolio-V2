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

}
