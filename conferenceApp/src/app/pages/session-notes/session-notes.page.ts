import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';
import { NotesRepositoryService } from 'src/app/repositories/notes/notes-repository.service';
import { SessionsRepositoryService } from 'src/app/repositories/sessions/sessions-repository.service';
const { Camera } = Plugins;

@Component({
  selector: 'app-session-notes',
  templateUrl: './session-notes.page.html',
  styleUrls: ['./session-notes.page.scss']
})
export class SessionNotesPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private notesRepositoryService: NotesRepositoryService,
              private sessionsRepositoryService: SessionsRepositoryService) { }

  sessionId: string;
  notes: any = {};
  session: any = {};

  async ngOnInit() {
    this.sessionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.session = await this.sessionsRepositoryService.getSessionById(this.sessionId);
    this.notes = await this.notesRepositoryService.getNotesBySessionId(this.sessionId);
  }

  async saveNote(note, image) {
    this.notes.note = note;
    this.notes.images.push(image);
    await this.notesRepositoryService.saveNote(this.sessionId, this.notes);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    const imageBase64 = 'data:image/png;base64,' + image.base64String;
    this.saveNote(this.notes.note, imageBase64);
  }
}
