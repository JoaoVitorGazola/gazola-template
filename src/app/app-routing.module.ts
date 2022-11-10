import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { testRoutes } from './test-routes';

const routes: Routes = testRoutes; // TODO: Substituir para suas rotas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
