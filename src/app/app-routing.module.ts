import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from 'src/modules/auth-page/auth-page.component';
import { MainComponent } from 'src/modules/main/main.component';
import { InfoComponent } from 'src/modules/info/info.component';

const routes: Routes = [
  {path: "auth", component: AuthPageComponent},
  {path: "main", component: MainComponent },
  {path: "info", component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
