import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaElementComponent } from './llista-element.component';

describe('LlistaElementComponent', () => {
  let component: LlistaElementComponent;
  let fixture: ComponentFixture<LlistaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaElementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
