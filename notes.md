# Unit 4 - Intro to Authentication

- AuthN - Authentication - Who are you?

  - When the web server verifies the identity of a client

- AuthZ - Authorization - What do you want?
  - When the web server determines the level of access a client has to a resource

## Core Principles

- Require strong passwords from the user
- Properly store passwords in the database
- Prevent Brute force attacks against the database

Time complexity - Created by hashing a hash over and over again until it takes too long to create a rainbow table

## Session Flow

1. Client sends credentials (UN/PW) to server
2. Server creates a session and sends a the session ID to the client
3. Client stores the sessions ID locally
4. Client includes session ID when calling protected routes
5. Server verifies session and provides or denies access
