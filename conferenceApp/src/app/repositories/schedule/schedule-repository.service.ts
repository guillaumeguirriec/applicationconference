import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ScheduleRepositoryService {
  constructor() {}

  async setObject(schedule: any) {
    await Storage.set({
      key: 'schedule',
      value: JSON.stringify(schedule)
    });
  }

  async getObject() {
    const schedule = await Storage.get({ key: 'schedule' });
    return JSON.parse(schedule.value);
  }
}
