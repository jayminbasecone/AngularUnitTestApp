import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: LazyComponent
  }
]

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
