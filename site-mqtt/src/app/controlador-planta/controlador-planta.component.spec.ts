import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladorPlantaComponent } from './controlador-planta.component';

describe('ControladorPlantaComponent', () => {
  let component: ControladorPlantaComponent;
  let fixture: ComponentFixture<ControladorPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControladorPlantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControladorPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
