import { Component, OnInit } from "@angular/core";

import { SpeakersRepositoryService } from "../repositories/speakers/speakers-repository.service";

@Component({
  selector: "app-presentateur-details",
  templateUrl: "./presentateur-details.page.html",
  styleUrls: ["./presentateur-details.page.scss"]
})
export class PresentateurDetailsPage implements OnInit {
  constructor(private speakersRepositoryService: SpeakersRepositoryService) {}

  ngOnInit() {}
}
