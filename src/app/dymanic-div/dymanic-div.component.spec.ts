import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymanicDivComponent } from './dymanic-div.component';

describe('DymanicDivComponent', () => {
  let component: DymanicDivComponent;
  let fixture: ComponentFixture<DymanicDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DymanicDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DymanicDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
