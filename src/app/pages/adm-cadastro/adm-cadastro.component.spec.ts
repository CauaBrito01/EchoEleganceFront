import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCadastroComponent } from './adm-cadastro.component';

describe('AdmCadastroComponent', () => {
  let component: AdmCadastroComponent;
  let fixture: ComponentFixture<AdmCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
