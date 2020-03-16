import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLieuComponent } from './nouveau-lieu.component';

describe('NouveauLieuComponent', () => {
  let component: NouveauLieuComponent;
  let fixture: ComponentFixture<NouveauLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
