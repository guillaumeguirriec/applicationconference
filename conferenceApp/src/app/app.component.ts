import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScheduleService } from './services/schedule/schedule.service';
import { SessionsService } from './services/sessions/sessions.service';
import { SpeakersService } from './services/speakers/speakers.service';
import { NetworkService } from './services/network/network.service';

import { ScheduleRepositoryService } from './repositories/schedule/schedule-repository.service';
import { SessionsRepositoryService } from './repositories/sessions/sessions-repository.service';
import { SpeakersRepositoryService } from './repositories/speakers/speakers-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Conférence',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sessions',
      url: '/sessions',
      icon: 'list'
    },
    {
      title: 'Présentateurs',
      url: '/presentateurs',
      icon: 'people'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private scheduleService: ScheduleService,
    private sessionsService: SessionsService,
    private speakersService: SpeakersService,
    private scheduleRepositoryService: ScheduleRepositoryService,
    private sessionsRepositoryService: SessionsRepositoryService,
    private speakersRepositoryService: SpeakersRepositoryService,
    private networkService: NetworkService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initializeLocalData();
      this.networkService.addNetworkStatusChangeListener();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async initializeLocalData() {

    const networkStatus = await this.networkService.getNetworkStatus();

    if (networkStatus.connected) {
      // schedule
      this.scheduleService.getAllSchedule().subscribe(async schedule => {
        await this.scheduleRepositoryService.setObject(schedule);
      });

      // sessions
      this.sessionsService.getAllSessions().subscribe(async sessions => {
        await this.sessionsRepositoryService.setObject(sessions);
      });

      // speakers
      this.speakersService.getAllSpeakers().subscribe(async speakers => {
        await this.speakersRepositoryService.setObject(speakers);
      });
    }
  }
}
