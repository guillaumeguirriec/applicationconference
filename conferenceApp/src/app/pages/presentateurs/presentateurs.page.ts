import { Component, OnInit } from '@angular/core';

import { SpeakersRepositoryService } from '../../repositories/speakers/speakers-repository.service';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss']
})
export class PresentateursPage implements OnInit {
  constructor(private speakersRepositoryService: SpeakersRepositoryService) {}

  speakers = {};

  ngOnInit() {
    this.speakersRepositoryService.getObject().then((speakers) => {
      this.speakers = speakers;
    });
  }

  noSpeakers(): boolean {
    return !this.speakers || Object.keys(this.speakers).length < 1;
  }
}
