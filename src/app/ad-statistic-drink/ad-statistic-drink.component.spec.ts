import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStatisticDrinkComponent } from './ad-statistic-drink.component';

describe('AdStatisticDrinkComponent', () => {
  let component: AdStatisticDrinkComponent;
  let fixture: ComponentFixture<AdStatisticDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdStatisticDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdStatisticDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
