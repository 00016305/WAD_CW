import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EventListComponent } from './components/event/event.component';
import { EventFormComponent } from './components/event-form/event-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/create', component: EventFormComponent },
  { path: 'events/edit/:id', component: EventFormComponent },
  { path: '**', redirectTo: '/users' }
];
