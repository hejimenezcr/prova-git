import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallElementComponent } from './detall-element.component';

describe('DetallElementComponent', () => {
  let component: DetallElementComponent;
  let fixture: ComponentFixture<DetallElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallElementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
