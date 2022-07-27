import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegisterResultComponent } from './update-register-result.component';

describe('UpdateRegisterResultComponent', () => {
  let component: UpdateRegisterResultComponent;
  let fixture: ComponentFixture<UpdateRegisterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegisterResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegisterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
