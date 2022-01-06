import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountComponent } from './timer-count.component';

describe('TimerCountComponent', () => {
  let component: TimerCountComponent;
  let fixture: ComponentFixture<TimerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
