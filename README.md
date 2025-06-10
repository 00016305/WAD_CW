This application was developed for Web Application module, as coursework portfolio project @ WIUT by student ID: 00016305

# Project Overview
This repository contains two main projects:

- **Backend:** ASP.NET Core API (`backend16305`)
- **Frontend:** Angular application (`front-evenManager-16305`)

---

## Backend: `backend16305`

### Description
An ASP.NET Core Web API that provides RESTful endpoints for event management, including user authentication, event creation, and registration.

### Features
- User registration and authentication
- CRUD operations for events
- Participant management

### Getting Started

1. **Navigate to the backend directory:**
    ```bash
    cd backend16305
    ```

2. **Restore dependencies:**
    ```bash
    dotnet restore
    ```

3. **Run the API:**
    ```bash
    dotnet run
    ```

4. **API Documentation:**  
    Swagger UI available at `https://localhost:5065/swagger`

---

## Frontend: `front-evenManager-16305`

### Description
An Angular application that interacts with the backend API to provide a user interface for managing events and participants.

### Features
- User login and registration
- Event listing, creation, and editing
- Participant registration

### Getting Started

1. **Navigate to the frontend directory:**
    ```bash
    cd front-evenManager-16305
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```

4. **Access the app:**  
    Open `http://localhost:4200` in your browser.

---