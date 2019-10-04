import { Component, OnInit } from "@angular/core";

import { SpeakersRepositoryService } from "../repositories/speakers/speakers-repository.service";

@Component({
  selector: "app-presentateurs",
  templateUrl: "./presentateurs.page.html",
  styleUrls: ["./presentateurs.page.scss"]
})
export class PresentateursPage implements OnInit {
  constructor(private speakersRepositoryService: SpeakersRepositoryService) {}

  ngOnInit() {}
}
