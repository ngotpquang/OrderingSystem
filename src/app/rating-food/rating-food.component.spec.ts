import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFoodComponent } from './rating-food.component';

describe('RatingFoodComponent', () => {
  let component: RatingFoodComponent;
  let fixture: ComponentFixture<RatingFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
