import { Component, OnInit } from "@angular/core";

import { SessionsRepositoryService } from "../repositories/sessions/sessions-repository.service";

@Component({
  selector: "app-session-details",
  templateUrl: "./session-details.page.html",
  styleUrls: ["./session-details.page.scss"]
})
export class SessionDetailsPage implements OnInit {
  constructor(private sessionsRepositoryService: SessionsRepositoryService) {}

  ngOnInit() {}
}
