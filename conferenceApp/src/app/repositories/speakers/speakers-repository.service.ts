import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Injectable({
  providedIn: "root"
})
export class SpeakersRepositoryService {
  constructor() {}

  async setObject(speakers: any) {
    await Storage.set({
      key: "speakers",
      value: JSON.stringify(speakers)
    });
  }

  async getObject() {
    const speakers = await Storage.get({ key: "speakers" });
    return JSON.parse(speakers.value);
  }
}
