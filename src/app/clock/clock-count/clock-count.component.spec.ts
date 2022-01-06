import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCountComponent } from './clock-count.component';

describe('ClockCountComponent', () => {
  let component: ClockCountComponent;
  let fixture: ComponentFixture<ClockCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
