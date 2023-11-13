import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductCardComponent } from './adm-product-card.component';

describe('AdmProductCardComponent', () => {
  let component: AdmProductCardComponent;
  let fixture: ComponentFixture<AdmProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
