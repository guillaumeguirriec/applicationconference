import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  constructor() {}

  async setObject(notes: any) {
    await Storage.set({
      key: 'notes',
      value: JSON.stringify(notes)
    });
  }

  async getObject() {
    const notes = await Storage.get({key : 'notes'});
    return JSON.parse(notes.value);
  }

  async getNotesBySessionId(sessionId: string) {
    const notes = await Storage.get({key : 'notes'});
    const notesJSON = JSON.parse(notes.value);
    if (notesJSON[sessionId]) {
      return notesJSON[sessionId];
    }
    return {note: '', images: []};
  }

  async saveNote(sessionId: string, note: any) {
    const notes = this.getObject();
    notes[sessionId] = note;
    this.setObject(notes);
  }
}
