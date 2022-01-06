import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCounterComponent } from './clock-counter.component';

describe('ClockCounterComponent', () => {
  let component: ClockCounterComponent;
  let fixture: ComponentFixture<ClockCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
