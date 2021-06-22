import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'toolbar', component:ToolbarComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
