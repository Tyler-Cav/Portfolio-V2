import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardCollectionPage } from './keyboard-collection-page';

describe('KeyboardCollectionPage', () => {
  let component: KeyboardCollectionPage;
  let fixture: ComponentFixture<KeyboardCollectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardCollectionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardCollectionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
