# Z-Prefix-CRUD-Application

## How to Run

From the project root:

```bash
docker compose up --build
```

- The client will be available at: `http://localhost:5173`
- The server will be available at: `http://localhost:8080`

## Server Endpoints

The API is mounted under `/users`, `/items`, and `/auth`.

### Auth Endpoints

- `POST /auth/register` — create a new user
- `POST /auth/login` — login a user
- `POST /auth/logout` — logout the current user
- `GET /auth/me` — get the current authenticated user

### User Endpoints

- `GET /users` — get all users
- `DELETE /users/delete/:id` — delete a user by ID

### Item Endpoints

- `GET /items` — get all items
- `GET /items/id/:id` — get an item by ID
- `GET /items/user_id/:id` — get all items for a specific user ID
- `POST /items/create` — create a new item
- `PATCH /items/update/:id` — partially update an item by ID
- `PUT /items/put/:id` — fully replace an item by ID
- `DELETE /items/delete/:id` — delete an item by ID

## Notes

- The server expects JSON bodies for create/update routes.
- CORS is configured for the client origin `http://localhost:5173`.
- If the docker compose is breaking do a `docker compose down -v`.
