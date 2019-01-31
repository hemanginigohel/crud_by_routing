import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginparamComponent } from './loginparam/loginparam.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'' ,redirectTo:'/record-list' ,pathMatch:'full'},
  { path: 'record-list', component: HomeComponent },
  { path: 'record-list/:id', component: LoginparamComponent },
  {path:'**' ,component:ErrorComponent  }
  //  { path: 'dashboard', redirectTo: '/login', pathMatch: 'full' },
  //  {path :'loginparam/:id' ,component:LoginparamComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {


}
