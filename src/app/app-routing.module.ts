import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ControllerComponent } from './controller/controller.component';
import { LedComponent } from './led/led.component';

const routes: Routes = [
  { path: "", redirectTo: "/controller", pathMatch: "full" },
  // { path: "home", component: HomeComponent },
  // { path: "second", component: SecondComponent },
  { path: "controller", component: ControllerComponent },
  { path: "led",component:LedComponent},
  { path: "**", component: ControllerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
