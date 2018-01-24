import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanJoseComponent } from "./san-jose/san-jose.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { ChicagoComponent } from "./chicago/chicago.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { WashingtonComponent } from "./washington/washington.component";
import { DallasComponent } from "./dallas/dallas.component";

const routes: Routes = [
  {path: 'sanjose', component: SanJoseComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'washington', component: WashingtonComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'seattle', component: SeattleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
