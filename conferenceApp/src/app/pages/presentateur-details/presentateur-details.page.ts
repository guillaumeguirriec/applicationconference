import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpeakersRepositoryService } from '../../repositories/speakers/speakers-repository.service';

@Component({
  selector: 'app-presentateur-details',
  templateUrl: './presentateur-details.page.html',
  styleUrls: ['./presentateur-details.page.scss']
})
export class PresentateurDetailsPage implements OnInit {

  speakerDetails: any = {};
  speakerSessions: any = {};

  constructor(private speakersRepositoryService: SpeakersRepositoryService, private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    const speakerId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.speakerDetails = await this.speakersRepositoryService.getSpeakerById(speakerId);
  }
}
