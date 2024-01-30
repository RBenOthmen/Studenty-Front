import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "event";
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.apiUrl}/${this.url}`);
  }
  
}
