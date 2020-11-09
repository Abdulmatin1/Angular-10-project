import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBaseCrudeComponent } from './fire-base-crude.component';

describe('FireBaseCrudeComponent', () => {
  let component: FireBaseCrudeComponent;
  let fixture: ComponentFixture<FireBaseCrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireBaseCrudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireBaseCrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
