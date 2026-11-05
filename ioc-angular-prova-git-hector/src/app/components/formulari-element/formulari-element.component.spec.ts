import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariElementComponent } from './formulari-element.component';

describe('FormulariElementComponent', () => {
  let component: FormulariElementComponent;
  let fixture: ComponentFixture<FormulariElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariElementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
