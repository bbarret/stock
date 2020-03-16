import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireLieuComponent } from './formulaire-lieu.component';

describe('FormulaireLieuComponent', () => {
  let component: FormulaireLieuComponent;
  let fixture: ComponentFixture<FormulaireLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
