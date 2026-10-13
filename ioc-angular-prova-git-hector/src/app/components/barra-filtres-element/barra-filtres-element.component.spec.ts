import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraFiltresElementComponent } from './barra-filtres-element.component';

describe('BarraFiltresElementComponent', () => {
  let component: BarraFiltresElementComponent;
  let fixture: ComponentFixture<BarraFiltresElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraFiltresElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraFiltresElementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
