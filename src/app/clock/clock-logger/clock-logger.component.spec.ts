import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockLoggerComponent } from './clock-logger.component';

describe('ClockLoggerComponent', () => {
  let component: ClockLoggerComponent;
  let fixture: ComponentFixture<ClockLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
