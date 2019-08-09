import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateManualWorkoutComponent } from './generate-manual-workout/generate-manual-workout.component';


const routes: Routes = [
  {path:'generator',component:GenerateManualWorkoutComponent},
  {path:'',redirectTo:'generator',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
