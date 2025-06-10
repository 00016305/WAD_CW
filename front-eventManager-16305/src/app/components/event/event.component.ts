import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  loading = false;
  error: string | null = null;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading = true;
    this.error = null;
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.events = events.map((e: any) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          dateTime: e.dateTime,
          location: e.location,
          maxAttendees: e.maxAttendees,
          organizerId: e.organizerId,
          createdAt: e.createdAt
        }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load events. Please try again.';
        this.loading = false;
        console.error('Error loading events:', err);
      }
    });
  }

  deleteEvent(id: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe({
        next: () => {
          this.events = this.events.filter(event => event.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete event. Please try again.';
          console.error('Error deleting event:', err);
        }
      });
    }
  }
}