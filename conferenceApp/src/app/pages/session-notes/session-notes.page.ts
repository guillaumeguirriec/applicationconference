import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

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

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    const imageUrl = image.webPath;
  }
}