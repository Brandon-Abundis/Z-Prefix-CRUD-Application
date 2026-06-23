# Z-Prefix-CRUD-Application (⋟﹏⋞)

> **⚠️Warning:** Make sure Docker Desktop is running before you run the command below.

## How to Run 📜

From the project root:


```bash
docker compose up
```

- The client will be available at: `http://localhost:5173` 💻
- The server will be available at: `http://localhost:8080` 🛢️
- ✅ Generic login credentials: username: `user`, password: `123`.

> **⚠️Mac Users' issues** unknown issue regarding Dockerfiles, work-around below, replace the docker code with these if build error occures!

- for the `client` Dockerfile
```Dockerfile
#client
FROM node:alpine

WORKDIR /app

COPY package*.json ./

# Workaround for environments with TLS/CA interception during build
RUN npm config set strict-ssl false \
 && npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```
- for the `server` Dockerfile
```Dockerfile
#server
FROM node:alpine

# Adds basic shell tools often needed for migrations/scripts
# Install CA certificates first so TLS verification succeeds, then install bash
RUN sed -i 's/https:/http:/' /etc/apk/repositories \
 && apk update \
 && apk add --no-cache ca-certificates bash \
 && update-ca-certificates

WORKDIR /app

COPY package*.json ./

# Workaround for environments with TLS/CA interception during build
RUN npm config set strict-ssl false \
 && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
```

## Server Endpoints 🖧

The API is mounted under `/users`, `/items`, and `/auth`.

### Auth Endpoints 🪪

- `POST /auth/register` — create a new user
- `POST /auth/login` — login a user
- `POST /auth/logout` — logout the current user
- `GET /auth/me` — get the current authenticated user, 'cookies'!

### User Endpoints 👤

- `GET /users` — get all users
- `DELETE /users/delete/:id` — delete a user by ID

### Item Endpoints 📦📦

- `GET /items` — get all items
- `GET /items/id/:id` — get an item by ID
- `GET /items/user_id/:id` — get all items for a specific user ID
- `POST /items/create` — create a new item
- `PATCH /items/update/:id` — partially update an item by ID
- `PUT /items/put/:id` — fully replace an item by ID
- `DELETE /items/delete/:id` — delete an item by ID

## Notes ☢️

- The server expects JSON bodies for create/update routes.
- CORS is configured for the client origin `http://localhost:5173`.
- If the docker compose is breaking do a `docker compose down -v`.
- `Auth` and `Cookies` took me 4 days to figure out ♡(˶>⩊<˶)...

## Pics of how its supposed to look like...
| | | |
|---|---|---|
| ![Home (no user)](./client/public/front-end%20pictures/1.%20home-no-user.png) | ![Login](./client/public/front-end%20pictures/2.%20login.png) | ![Register](./client/public/front-end%20pictures/3.%20register.png) |
| ![Home (user logged in)](./client/public/front-end%20pictures/4.%20home-user.png) | ![Inventory](./client/public/front-end%20pictures/5.%20inventory.png) | ![Add Item](./client/public/front-end%20pictures/6.%20add-item.png) |
| ![Delete Item](./client/public/front-end%20pictures/7.%20delete-item.png) | | |
