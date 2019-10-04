import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  scheduleURL: string;

  constructor(private http: HttpClient) {
    this.scheduleURL = API_URL + 'schedule';
  }

  getAllSchedule(): Observable<any> {
    return this.http.get(`${this.scheduleURL}`);
  }
}
