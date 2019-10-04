import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionsRepositoryService } from '../../repositories/sessions/sessions-repository.service';
import { SpeakersRepositoryService } from 'src/app/repositories/speakers/speakers-repository.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.page.html',
  styleUrls: ['./session-details.page.scss']
})
export class SessionDetailsPage implements OnInit {

  private sessionDetails: any = {};
  private sessionSpeakers = [];

  constructor(private sessionsRepositoryService: SessionsRepositoryService, private speakersRepositoryService: SpeakersRepositoryService, private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    const sessionId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.sessionDetails = await this.sessionsRepositoryService.getSessionById(sessionId);
    if(this.sessionDetails.speakers) {
      this.sessionDetails.speakers.forEach(async speakerId => {
        const speakerDetails = await this.speakersRepositoryService.getSpeakerById(speakerId);
        this.sessionSpeakers.push(speakerDetails);
      });
    }
  }
}
