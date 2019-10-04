import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpeakersRepositoryService } from '../../repositories/speakers/speakers-repository.service';
import { SessionsRepositoryService } from 'src/app/repositories/sessions/sessions-repository.service';

@Component({
  selector: 'app-presentateur-details',
  templateUrl: './presentateur-details.page.html',
  styleUrls: ['./presentateur-details.page.scss']
})
export class PresentateurDetailsPage implements OnInit {

  private speakerDetails: any = {};
  private speakerSessions: any = {};

  constructor(private speakersRepositoryService: SpeakersRepositoryService, private sessionsRepositoryService: SessionsRepositoryService, private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    const speakerId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.speakerDetails = await this.speakersRepositoryService.getSpeakerById(speakerId);
    this.speakerSessions = await this.sessionsRepositoryService.getSessionsBySpeakerId(speakerId);
    console.log(this.speakerSessions);
  }
}
