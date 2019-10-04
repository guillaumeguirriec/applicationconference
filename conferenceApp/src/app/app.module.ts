import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ScheduleRepositoryService } from './repositories/schedule/schedule-repository.service';
import { SessionsRepositoryService } from './repositories/sessions/sessions-repository.service';
import { SpeakersRepositoryService } from './repositories/speakers/speakers-repository.service';
import { NotesRepositoryService } from './repositories/notes/notes-repository.service';

import { ScheduleService } from './services/schedule/schedule.service';
import { SessionsService } from './services/sessions/sessions.service';
import { SpeakersService } from './services/speakers/speakers.service';
import { NetworkService } from './services/network/network.service';
import { DeviceService } from './services/device/device.service';

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
    NotesRepositoryService,
    ScheduleService,
    SessionsService,
    SpeakersService,
    NetworkService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
