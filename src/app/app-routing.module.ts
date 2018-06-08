import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SecondComponent } from "./second/second.component";
import { ControllerComponent } from "./controller/controller.component";
import { LedComponent } from './led/led.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: "home", component: HomeComponent },
  // { path: "second", component: SecondComponent },
  { path: "controller", component: ControllerComponent },
  { path: "led",component:LedComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
