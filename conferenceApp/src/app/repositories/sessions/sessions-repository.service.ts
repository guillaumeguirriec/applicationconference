import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class SessionsRepositoryService {
  constructor() {}

  async setObject(sessions: any) {
    await Storage.set({
      key: 'sessions',
      value: JSON.stringify(sessions)
    });
  }

  async getObject() {
    const sessions = await Storage.get({ key: 'sessions' });
    return JSON.parse(sessions.value);
  }

  async getSessionById(id: string) {
    const sessions = await Storage.get({ key: 'sessions' });
    const sessionsJSON = JSON.parse(sessions.value);
    return sessionsJSON[id];
  }

  async getSessionsBySpeakerId(speakerId: string) {
    const speakerSessions = [];
    const allSessions: any = await this.getObject();
    Object.values(allSessions).forEach((session: any) => {
      if (session.speakers && session.speakers.includes(parseInt(speakerId, 10))) {
        speakerSessions.push(session);
      }
    });
    return speakerSessions;
  }
}
