import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicsComponent } from './acadamics.component';

describe('AcadamicsComponent', () => {
  let component: AcadamicsComponent;
  let fixture: ComponentFixture<AcadamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadamicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
