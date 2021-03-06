import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsignupComponent } from './bsignup/bsignup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { HallsComponent } from './halls/halls.component';
import { CateringComponent } from './catering/catering.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { HallvComponent } from './halls/hallv/hallv.component';

const routes: Routes = [
  { path: "",component: HomeComponent, pathMatch: 'full', },
  { path: "home", component: HomeComponent },
  { path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"blogin", component:BsignupComponent},
  {path:"halls",component: HallsComponent},
  {path:"catering",component:CateringComponent},
  {path:"photographer",component:PhotographersComponent},
  {path:"hallv", component:HallvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
