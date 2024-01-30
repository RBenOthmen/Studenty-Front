import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event } from './models/Event';
import { EventService } from './services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Studenty-Front';
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService
      .getEvents()
      .subscribe((result: Event[]) => (this.events = result));
  }
}
