import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLimitComponent } from './timer-limit.component';

describe('TimerLimitComponent', () => {
  let component: TimerLimitComponent;
  let fixture: ComponentFixture<TimerLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
