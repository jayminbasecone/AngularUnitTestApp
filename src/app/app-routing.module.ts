import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputUseComponent } from './input-output-use/input-output-use.component';
export const routes: Routes = [
  {path:"",redirectTo:"student",pathMatch:"full"},
  {path:"student",component:InputOutputUseComponent},
  {
    path:'lazy', loadChildren:() => import('./lazy/lazy.module').then(m=>m.LazyModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
