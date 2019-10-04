import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-notes',
  templateUrl: './session-notes.page.html',
  styleUrls: ['./session-notes.page.scss']
})
export class SessionNotesPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  sessionId: string;

  ngOnInit() {
    this.sessionId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
