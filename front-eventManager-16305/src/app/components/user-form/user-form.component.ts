import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})

export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.userId = +id;
        this.loadUser();
      }
    });
  }

  loadUser(): void {
    if (this.userId) {
      this.loading = true;
      this.userService.getUserById(this.userId).subscribe({
        next: (user) => {
          this.userForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone
          });
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load user data';
          this.loading = false;
          console.error('Error loading user:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.loading = true;
      this.error = null;

      const userData = this.userForm.value;

      if (this.isEditMode && this.userId) {
        const updateData = { ...userData, id: this.userId };
        this.userService.updateUser(updateData).subscribe({
          next: () => {
            this.router.navigate(['/users']);
          },
          error: (err) => {
            this.error = 'Failed to update user';
            this.loading = false;
            console.error('Error updating user:', err);
          }
        });
      } else {
        this.userService.createUser(userData).subscribe({
          next: () => {
            this.router.navigate(['/users']);
          },
          error: (err) => {
            this.error = 'Failed to create user';
            this.loading = false;
            console.error('Error creating user:', err);
          }
        });
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}