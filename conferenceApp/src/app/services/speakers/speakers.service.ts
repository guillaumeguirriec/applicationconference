import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SpeakersService {
  speakersURL: string;

  constructor(private http: HttpClient) {
    this.speakersURL = API_URL + "speakers";
  }

  getAllSpeakers(): Observable<any> {
    return this.http.get(`${this.speakersURL}`);
  }
}
