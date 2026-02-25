# TinyTornado URL Shortener

TinyTornado is a URL shortener built with Next.js (App Router) and MongoDB.

## Features

- Create custom short links (`/shorten`)
- Redirect from short codes (`/[shorturl]`)
- About and Contact pages
- MongoDB-backed storage

## Tech Stack

- Next.js 16
- React 19
- MongoDB Node Driver
- Tailwind CSS 4

## Prerequisites

- Node.js 20+
- npm
- MongoDB (local or Atlas)

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000
```

Notes:

- `MONGODB_URI`: your MongoDB connection string.
- `NEXT_PUBLIC_HOST`: base URL used to display generated links in the UI.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start MongoDB (if using local MongoDB).

3. Run dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Push this project to GitHub.
2. Import repository in Vercel.
3. Add environment variables in Vercel Project Settings:
   - `MONGODB_URI`
   - `NEXT_PUBLIC_HOST` (example: `https://your-domain.vercel.app`)
4. Deploy.

### Option 2: Deploy on a VPS

1. Copy project to server.
2. Install dependencies:

```bash
npm install
```

3. Set production environment variables (`.env.local` or system env).
4. Build and start:

```bash
npm run build
npm run start
```

5. Put it behind Nginx/Apache reverse proxy.

## API Endpoint

- `POST /api/generate`
  - Body:

```json
{
  "url": "https://example.com",
  "shorturl": "example"
}
```

Returns success/error JSON with message.

## Troubleshooting

- `Unable to create short URL...`: verify `MONGODB_URI` and ensure MongoDB is reachable.
- Redirect not working: confirm document exists in `tinytornado.urls` collection.
- Wrong generated host: set `NEXT_PUBLIC_HOST` to the correct public URL.
