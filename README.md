# Video Sharing Platform

A full-stack video sharing platform inspired by YouTube, built with modern web technologies. This project allows users to upload, view, and interact with videos, manage playlists, and subscribe to other users.

---

## Features

- **User Authentication**: Secure sign-in and sign-up using Clerk.
- **Video Upload & Management**: Upload videos (with Mux integration), edit details, and manage visibility.
- **Categories**: Videos are organized into categories (e.g., Music, Gaming, Education).
- **Reactions**: Like or dislike videos, with real-time feedback.
- **Subscriptions**: Subscribe to channels and manage your subscriptions.
- **Playlists**: Like videos and view your liked playlist.
- **Responsive UI**: Modern, mobile-friendly interface using React and Tailwind CSS.

---

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: tRPC, Node.js
- **Database**: Drizzle ORM (with PostgreSQL or SQLite)
- **Authentication**: Clerk
- **Video Processing**: Mux
- **Icons/UI**: Lucide, Sonner (for toasts)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm
- PostgreSQL (or SQLite, depending on configuration)
- Mux account (for video uploads)
- Clerk account (for authentication)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/video-platform.git
   cd video-platform
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and configure the following:

   ```
   DATABASE_URL=your_database_url
   CLERK_SECRET_KEY=your_clerk_secret
   MUX_TOKEN_ID=your_mux_token_id
   MUX_TOKEN_SECRET=your_mux_token_secret
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL=/

   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   CLERK_SIGNING_SECRET
   DATABASE_URL
   UPSTASH_REDIS_REST_URL
   UPSTASH_REDIS_REST_TOKEN
   MUX_TOKEN_ID
   MUX_TOKEN_SECRET
   MUX_WEBHOOK_SECRET
   UPLOADTHING_TOKEN
   QSTASH_TOKEN
   UPSTASH_WORKFLOW_URL
   QSTASH_CURRENT_SIGNING_KEY
   QSTASH_NEXT_SIGNING_KEY
   OPENAI_API_KEY
   ```

4. **Run database migrations and seed categories:**

   ```bash
   # Run migrations (if using Drizzle CLI or your migration tool)
   yarn db:migrate

   # Seed categories
   yarn tsx src/scripts/seed-categories.ts
   ```

5. **Start the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. **Visit the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure
