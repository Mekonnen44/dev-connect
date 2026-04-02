# Dev Connect

## Overview
A mini platform for developers to:
- Post project ideas
- Find collaborators
- Chat in real-time

## Tech Stack
- **Frontend:** React + Tailwind
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Real-time:** Socket.io
- **Auth:** JWT

## Features
- User profiles (skills, bio)
- Project posting & filtering
- Real-time project-based chat

## Setup Instructions
1. **Backend**
   - Navigate to the backend directory: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file as per `.example.env` and fill in your MongoDB URI and JWT secret
   - Run server: `npm start`

2. **Frontend**
   - Navigate to the frontend directory: `cd frontend`
   - Install dependencies: `npm install`
   - Create a `.env` with `REACT_APP_API_URL=` appropriately set
   - Run client: `npm start`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.