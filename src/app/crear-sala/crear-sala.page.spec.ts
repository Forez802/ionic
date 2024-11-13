import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearSalaPage } from './crear-sala.page';

describe('CrearSalaPage', () => {
  let component: CrearSalaPage;
  let fixture: ComponentFixture<CrearSalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
