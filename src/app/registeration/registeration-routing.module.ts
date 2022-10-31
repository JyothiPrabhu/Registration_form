import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'form', pathMatch: "full" },
      { path: '', component: FormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
