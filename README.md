# Showcase Backend

This is a simple Express.js backend application that fetches and serves the Medium feed of the user `@vjnvisakh`.

## Features

- Fetches the Medium RSS feed for the user `@vjnvisakh`.
- Serves the feed data via a REST API endpoint.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/vjnvisakh/showcase-be.git
   cd showcase-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The server will run on `http://localhost:80`.

## API Endpoints

### `GET /api/medium-feed`

Fetches the Medium RSS feed for the user `@vjnvisakh`.

#### Example Request:

```bash
curl http://localhost/api/medium-feed
```

#### Example Response:

The response will be the raw XML data of the Medium feed.

## License

This project is licensed under the MIT License.
