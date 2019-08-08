import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateManualWorkoutComponent } from './generate-manual-workout.component';

describe('GenerateManualWorkoutComponent', () => {
  let component: GenerateManualWorkoutComponent;
  let fixture: ComponentFixture<GenerateManualWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateManualWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateManualWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
