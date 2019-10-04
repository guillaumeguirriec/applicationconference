import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ContactsRepositoryService {

  constructor() {}

  async setObject(contacts: any) {
    await Storage.set({
      key: 'contacts',
      value: JSON.stringify(contacts)
    });
  }

  async getObject() {
    const contacts = await Storage.get({key : 'contacts'});
    return JSON.parse(contacts.value);
  }

  async doesSpeakerIsContact(speakerId: string) {
    const contacts = await Storage.get({key : 'contacts'});
    const contactsJSON = JSON.parse(contacts.value);
    if(contactsJSON && contactsJSON[speakerId]) {
      return contactsJSON[speakerId];
    } else {
      return false;
    }
  }

  async saveIsContact(speakerId: string, isContact: boolean) {
    const contacts = this.getObject();
    contacts[speakerId] = isContact;
    this.setObject(contacts);
  }
}
