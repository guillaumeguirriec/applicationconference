import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SessionsService {
  sessionsURL: string;

  constructor(private http: HttpClient) {
    this.sessionsURL = API_URL + "sessions";
  }

  getAllSessions(): Observable<any> {
    return this.http.get(`${this.sessionsURL}`);
  }
}
