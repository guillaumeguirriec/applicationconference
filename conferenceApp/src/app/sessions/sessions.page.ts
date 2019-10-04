import { Component, OnInit } from "@angular/core";

import { SessionsRepositoryService } from "../repositories/sessions/sessions-repository.service";

@Component({
  selector: "app-sessions",
  templateUrl: "./sessions.page.html",
  styleUrls: ["./sessions.page.scss"]
})
export class SessionsPage implements OnInit {
  constructor(private sessionsRepositoryService: SessionsRepositoryService) {}

  ngOnInit() {}
}
