import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  users: User[] = [];
  isEditMode = false;
  eventId: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['', Validators.required],
      location: ['', Validators.required],
      maxAttendees: [1, [Validators.required, Validators.min(1)]],
      organizerId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.eventId = +id;
        this.loadEvent();
      }
    });
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: users => this.users = users,
      error: err => console.error('Error loading users:', err)
    });
  }

  loadEvent(): void {
    if (this.eventId) {
      this.loading = true;
      this.eventService.getEventById(this.eventId).subscribe({
        next: event => {
          const dateTime = new Date((event as any).dateTime).toISOString().slice(0, 16);
          this.eventForm.patchValue({
            title: (event as any).title,
            description: (event as any).description,
            dateTime: dateTime,
            location: (event as any).location,
            maxAttendees: (event as any).maxAttendees,
            organizerId: (event as any).organizerId
          });
          this.loading = false;
        },
        error: err => {
          this.error = 'Failed to load event data';
          console.error('Error loading event:', err);
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.eventForm.invalid) return;

    this.loading = true;
    this.error = null;

    const eventData = {
      ...this.eventForm.value,
      organizerId: +this.eventForm.value.organizerId
    };

    if (this.isEditMode && this.eventId) {
      this.eventService.updateEvent({ ...eventData, id: this.eventId }).subscribe({
        next: () => {
          this.router.navigate(['/events']);
        },
        error: err => {
          this.error = 'Failed to update event';
          console.error('Update error:', err);
          this.loading = false;
        }
      });
    } else {
      this.eventService.createEvent(eventData).subscribe({
        next: () => {
          this.router.navigate(['/events']);
        },
        error: err => {
          this.error = 'Failed to create event';
          console.error('Create error:', err);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/events']);
  }
}
