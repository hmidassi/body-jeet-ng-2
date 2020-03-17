import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import data from '../commons/exercise-constants.json';

@Component({
  selector: 'app-generate-manual-workout',
  templateUrl: './generate-manual-workout.component.html',
  styleUrls: ['./generate-manual-workout.component.css']
})
export class GenerateManualWorkoutComponent implements OnInit {

  pushups:any=data.pushups;
  punches:any=data.punches;
  abs:any=data.abs;
  kicks:any=data.kicks;
  constructor(public fb:FormBuilder) { }

  exercisesForm = this.fb.group({
    name: ['']
  });

  onSubmit() {
    alert(JSON.stringify(this.exercisesForm.value))
  };

  ngOnInit() {
  }

}
