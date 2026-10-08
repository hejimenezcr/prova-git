import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaElementCompletComponent } from './targeta-element-complet.component';

describe('TargetaElementCompletComponent', () => {
  let component: TargetaElementCompletComponent;
  let fixture: ComponentFixture<TargetaElementCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaElementCompletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaElementCompletComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
