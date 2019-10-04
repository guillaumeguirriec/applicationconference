import { Injectable } from '@angular/core';
import { Plugins, NetworkStatus } from '@capacitor/core';
const { Network } = Plugins;

import { SessionsRepositoryService } from 'src/app/repositories/sessions/sessions-repository.service';
import { ScheduleRepositoryService } from 'src/app/repositories/schedule/schedule-repository.service';
import { SpeakersRepositoryService } from 'src/app/repositories/speakers/speakers-repository.service';
import { ScheduleService } from '../schedule/schedule.service';
import { SessionsService } from '../sessions/sessions.service';
import { SpeakersService } from '../speakers/speakers.service';



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private scheduleRepositoryService: ScheduleRepositoryService,
    private sessionsRepositoryService: SessionsRepositoryService,
    private speakersRepositoryService: SpeakersRepositoryService,
    private scheduleService: ScheduleService,
    private sessionsService: SessionsService,
    private speakersService: SpeakersService
  ) {}

  async getNetworkStatus() {
    return await Network.getStatus();
  }

  addNetworkStatusChangeListener() {
    Network.addListener('networkStatusChange', (status) => {
      if(status.connected) {
        this.reloadAppData();
      }
    });
  }

  reloadAppData() {
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
