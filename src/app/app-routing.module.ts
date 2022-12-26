import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from 'src/modules/auth-page/auth-page.component';
import { MainComponent } from 'src/modules/main/main.component';
import { InfoComponent } from 'src/modules/info/info.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path: "auth", component: AuthPageComponent},
  {path: "main", component: MainComponent, canActivate: [AuthGuard] },
  {path: "info", component: InfoComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
