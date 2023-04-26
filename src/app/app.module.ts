import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/all/all.component';
import { PlatformsComponent } from './Components/platforms/platforms.component';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
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
import { FlightComponent } from './Components/flight/flight.component';
import { BottleRoyaleComponent } from './Components/bottle-royale/bottle-royale.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DatailsComponent } from './Components/datails/datails.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AllComponent,
    PlatformsComponent,
    SortbyComponent,
    CategoriesComponent,
    NavbarComponent,
    FooterComponent,
    PcComponent,
    BrowserComponent,
    ReleaseComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    FlightComponent,
    BottleRoyaleComponent,
    NotFoundComponent,
    DatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule ,
    CarouselModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
