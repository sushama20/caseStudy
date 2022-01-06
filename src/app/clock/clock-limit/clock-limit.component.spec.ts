import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockLimitComponent } from './clock-limit.component';

describe('ClockLimitComponent', () => {
  let component: ClockLimitComponent;
  let fixture: ComponentFixture<ClockLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
