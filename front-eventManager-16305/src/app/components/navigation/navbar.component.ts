import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <h2>Event Manager</h2>
      </div>
      <div class="navbar-nav">
        <a routerLink="/users" routerLinkActive="active" class="nav-link">Users</a>
        <a routerLink="/events" routerLinkActive="active" class="nav-link">Events</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .navbar-brand h2 {
      color: white;
      margin: 0;
      font-weight: 300;
    }
    .navbar-nav {
      display: flex;
      gap: 2rem;
    }
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      transition: all 0.3s ease;
    }
    .nav-link:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-2px);
    }
    .nav-link.active {
      background: rgba(255,255,255,0.3);
    }
  `]
})
export class NavbarComponent {}