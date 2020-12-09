import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorwserComponent } from './borwser/borwser.component';



const routes: Routes = [
  { path: '', component: BorwserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
