import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/all/all.component';
import { PlatformsComponent } from './Components/platforms/platforms.component';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { PcComponent } from './Components/pc/pc.component';
import { BrowserComponent } from './Components/browser/browser.component';
import { ReleaseComponent } from './Components/release/release.component';
import { PopularityComponent } from './Components/popularity/popularity.component';
import { AlphabeticalComponent } from './Components/alphabetical/alphabetical.component';
import { RelevanceComponent } from './Components/relevance/relevance.component';
import { RacingComponent } from './Components/racing/racing.component';
import { SportsComponent } from './Components/sports/sports.component';
import { SocialComponent } from './Components/social/social.component';
import { ShooterComponent } from './Components/shooter/shooter.component';
import { OpenWorldComponent } from './Components/open-world/open-world.component';
import { ZombieComponent } from './Components/zombie/zombie.component';
import { FantasyComponent } from './Components/fantasy/fantasy.component';
import { ActionRpgComponent } from './Components/action-rpg/action-rpg.component';
import { ActionComponent } from './Components/action/action.component';
import { BottleRoyaleComponent } from './Components/bottle-royale/bottle-royale.component';
import { FlightComponent } from './Components/flight/flight.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'all',component:AllComponent},
  {path:'platforms',component:PlatformsComponent,children:[
    {path:'pc',component:PcComponent},
    {path:'browser',component:BrowserComponent}
  ]},
  {path:'sort-by',component:SortbyComponent,children:[
    {path:'release',component:ReleaseComponent},
    {path:'popularity',component:PopularityComponent},
    {path:'alphabetical',component:AlphabeticalComponent},
    {path:'relevance',component:RelevanceComponent}
  ]},
  {path:'categories',component:CategoriesComponent,children:[
    {path:'racing',component:RacingComponent},
    {path:'sports',component:SportsComponent},
    {path:'social',component:SocialComponent},
    {path:'shooter',component:ShooterComponent},
    {path:'open-world',component:OpenWorldComponent},
    {path:'zombie',component:ZombieComponent},
    {path:'fantasy',component:FantasyComponent},
    {path:'action-rpg',component:ActionRpgComponent},
    {path:'action',component:ActionComponent},
    {path:'flight',component:FlightComponent},
    {path:'bottle-royale',component:BottleRoyaleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
