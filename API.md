# API Documentation

## Base URL

```
https://queenmassage.id/api
```

## Endpoints

### Bookings

#### Create Booking
```
POST /api/bookings
```

**Body:**
```json
{
  "customerName": "string (required)",
  "phone": "string (required)",
  "email": "string (optional)",
  "address": "string (required)",
  "latitude": "number (optional)",
  "longitude": "number (optional)",
  "serviceId": "string (required)",
  "date": "string (required, YYYY-MM-DD)",
  "time": "string (required, HH:MM)",
  "duration": "number (required, 60|90|120)",
  "therapistGender": "string (optional, male|female|no_preference)",
  "notes": "string (optional)",
  "totalPrice": "number (required)"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "booking": { ... }
}
```

#### Get Bookings (Admin)
```
GET /api/bookings?page=1&limit=10&status=PENDING
```

### Contact

#### Submit Contact Form
```
POST /api/contact
```

**Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

### Careers

#### Submit Application
```
POST /api/careers
```

**Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "position": "string (required)",
  "experience": "string (optional)",
  "message": "string (optional)"
}
```

## Rate Limiting

All endpoints are rate-limited:
- **Max requests**: 100 per window
- **Window**: 60 seconds
- **Response when exceeded**: `429 Too Many Requests`

## Error Responses

```json
{
  "error": "Error message",
  "details": { ... }  // Optional, for validation errors
}
```

| Status | Meaning |
|--------|---------|
| 400 | Bad Request - Invalid data |
| 429 | Rate Limit Exceeded |
| 500 | Internal Server Error |

## Security

- CSRF protection via SameSite cookies
- Rate limiting per IP
- Input validation with Zod
- SQL injection protection via Prisma
- XSS protection via Content Security headers
- Secure HTTP headers (HSTS, X-Frame-Options, etc.)
