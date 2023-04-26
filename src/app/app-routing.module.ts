import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/all/all.component';
import { PlatformsComponent } from './Components/platforms/platforms.component';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { RegisterComponent } from './Components/register/register.component';
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
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { DatailsComponent } from './Components/datails/datails.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',canActivate:[AuthguardGuard],component:HomeComponent},
  {path:'all',canActivate:[AuthguardGuard],component:AllComponent},
  {path:'platforms',canActivate:[AuthguardGuard],component:PlatformsComponent
  ,children:[
    {path:'pc',canActivate:[AuthguardGuard],component:PcComponent},
    {path:'browser',canActivate:[AuthguardGuard],component:BrowserComponent} ]
  },
  {path:'sort-by',canActivate:[AuthguardGuard],component:SortbyComponent
  ,children:[
    {path:'release_date',canActivate:[AuthguardGuard],component:ReleaseComponent},
    {path:'popularity',canActivate:[AuthguardGuard],component:PopularityComponent},
    {path:'alphabetical',canActivate:[AuthguardGuard],component:AlphabeticalComponent},
    {path:'relevance',canActivate:[AuthguardGuard],component:RelevanceComponent}
  ]
},
  {path:'categories/:value',canActivate:[AuthguardGuard],component:CategoriesComponent
  // ,children:[
  //   {path:'racing',canActivate:[AuthguardGuard],component:RacingComponent},
  //   {path:'sports',canActivate:[AuthguardGuard],component:SportsComponent},
  //   {path:'social',canActivate:[AuthguardGuard],component:SocialComponent},
  //   {path:'shooter',canActivate:[AuthguardGuard],component:ShooterComponent},
  //   {path:'open-world',canActivate:[AuthguardGuard],component:OpenWorldComponent},
  //   {path:'zombie',canActivate:[AuthguardGuard],component:ZombieComponent},
  //   {path:'fantasy',canActivate:[AuthguardGuard],component:FantasyComponent},
  //   {path:'action-rpg',canActivate:[AuthguardGuard],component:ActionRpgComponent},
  //   {path:'action',canActivate:[AuthguardGuard],component:ActionComponent},
  //   {path:'flight',canActivate:[AuthguardGuard],component:FlightComponent},
  //   {path:'bottle-royale',canActivate:[AuthguardGuard],component:BottleRoyaleComponent}
  // ]
},
  {path:"details/:id",component:DatailsComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
