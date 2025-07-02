# API Documentation

## Authentication

### Login
**Endpoint:** `POST /login`  
**Description:** Authenticates a user and starts a session.  
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```
**Response:**
- **200 OK:** Successful login.
- **401 Unauthorized:** Invalid credentials.

---

### Register
**Endpoint:** `POST /register`  
**Description:** Registers a new user.  
**Request Body:**
```json
{
  "name": "Test User",
  "email": "user@example.com",
  "password": "password",
  "password_confirmation": "password"
}
```
**Response:**
- **201 Created:** User registered successfully.
- **422 Unprocessable Entity:** Validation errors.

---

## User Profile

### Get Profile
**Endpoint:** `GET /settings/profile`  
**Description:** Retrieves the authenticated user's profile.  
**Response:**
- **200 OK:** Returns user profile data.

### Update Profile
**Endpoint:** `PATCH /settings/profile`  
**Description:** Updates the authenticated user's profile.  
**Request Body:**
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
**Response:**
- **200 OK:** Profile updated successfully.
- **422 Unprocessable Entity:** Validation errors.

---

## Password Management

### Update Password
**Endpoint:** `PUT /settings/password`  
**Description:** Updates the authenticated user's password.  
**Request Body:**
```json
{
  "current_password": "current-password",
  "password": "new-password",
  "password_confirmation": "new-password"
}
```
**Response:**
- **200 OK:** Password updated successfully.
- **422 Unprocessable Entity:** Validation errors.

---

## Logout

### Logout
**Endpoint:** `POST /logout`  
**Description:** Logs out the authenticated user.  
**Response:**
- **204 No Content:** Successfully logged out.
