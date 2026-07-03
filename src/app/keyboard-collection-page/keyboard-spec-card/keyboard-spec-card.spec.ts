import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardSpecCard } from './keyboard-spec-card';

describe('KeyboardSpecCard', () => {
  let component: KeyboardSpecCard;
  let fixture: ComponentFixture<KeyboardSpecCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardSpecCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardSpecCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
