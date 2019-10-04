import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { ScheduleRepositoryService } from "./repositories/schedule/schedule-repository.service";
import { SessionsRepositoryService } from "./repositories/sessions/sessions-repository.service";
import { SpeakersRepositoryService } from "./repositories/speakers/speakers-repository.service";

import { ScheduleService } from "./services/schedule/schedule.service";
import { SessionsService } from "./services/sessions/sessions.service";
import { SpeakersService } from "./services/speakers/speakers.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ScheduleRepositoryService,
    SessionsRepositoryService,
    SpeakersRepositoryService,
    ScheduleService,
    SessionsService,
    SpeakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
