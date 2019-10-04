import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacts, Contact, ContactName } from '@ionic-native/contacts';

import { SpeakersRepositoryService } from '../../repositories/speakers/speakers-repository.service';
import { SessionsRepositoryService } from 'src/app/repositories/sessions/sessions-repository.service';
import { ContactsRepositoryService } from 'src/app/repositories/contacts/contacts-repository.service';

@Component({
  selector: 'app-presentateur-details',
  templateUrl: './presentateur-details.page.html',
  styleUrls: ['./presentateur-details.page.scss']
})
export class PresentateurDetailsPage implements OnInit {

  speakerDetails: any = {};
  speakerSessions: any = [];
  isContact: boolean;

  constructor(private speakersRepositoryService: SpeakersRepositoryService,
              private sessionsRepositoryService: SessionsRepositoryService,
              private contactsRepositoryService: ContactsRepositoryService,
              private contacts: Contacts,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const speakerId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.speakerDetails = await this.speakersRepositoryService.getSpeakerById(speakerId);
    this.speakerSessions = await this.sessionsRepositoryService.getSessionsBySpeakerId(speakerId);
    this.isContact = await this.contactsRepositoryService.doesSpeakerIsContact(speakerId);
  }

  async updateIsContact() {
    await this.contactsRepositoryService.saveIsContact(this.speakerDetails.id, this.isContact);
    if (this.isContact) {
      const contact: Contact = this.contacts.create();
      contact.name = new ContactName(this.speakerDetails.name);
      contact.nickname = this.speakerDetails.name;
      contact.displayName = this.speakerDetails.name;
      await contact.save();
    }
  }
}
