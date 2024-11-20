
# API Documentation for Spark Backend

## Base URL
`https://spark-vj63.onrender.com`

---

## Endpoints

### 1. Signup Endpoint
**Endpoint:**  
`POST /auth/signup`

**Request JSON:**  
```json
{
  "fullname": "username",
  "email": "user@example.com",
  "password": "securePassword123",
  "password2": "securePassword123"
}
```

**Response JSON:**  
- **On success:**  
  ```json
  {
    "message": "Signup successful! Please check your email to confirm your account.",
    "status": "success"
  }
  ```
- **On failure:**  
  ```json
  {
    "error": "Passwords do not match."
  }
  ```

---

### 2. Confirm Email Endpoint
**Endpoint:**  
`GET /auth/confirm`

**Request Query Parameters:**  
- `token_hash` (required): The token hash from the confirmation email.  
- `type` (required): Set as `email`.  
- `next` (optional): A redirect URL after confirmation (e.g., `/dashboard`).

**Response:**  
Redirects to:  
- On success: `/dashboard` or the specified redirect URL.  
- On failure: `/auth/auth-code-error`.

---

### 3. Signin Endpoint
**Endpoint:**  
`POST /auth/signin`

**Request JSON:**  
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response JSON:**  
- **On success:**  
  ```json
  {
    "message": "Login successful!",
    "session": {
      "access_token": "your-access-token",
      "refresh_token": "your-refresh-token",
      "user": {
        "id": "unique-user-id",
        "email": "user@example.com"
      }
    }
  }
  ```
- **On failure:**  
  ```json
  {
    "error": "Invalid email or password."
  }
  ```

---