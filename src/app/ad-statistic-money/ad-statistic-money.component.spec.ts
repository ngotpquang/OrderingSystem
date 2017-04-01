import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStatisticMoneyComponent } from './ad-statistic-money.component';

describe('AdStatisticMoneyComponent', () => {
  let component: AdStatisticMoneyComponent;
  let fixture: ComponentFixture<AdStatisticMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdStatisticMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdStatisticMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
