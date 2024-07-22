---
title: "UniHive Web"
publishedAt: 2024-05-27
description: "Web application for managing club events. It facilitates the creation, promotion, and coordination of club events, making it easy for students to discover the activities offered by various clubs."
slug: "UniHive-Web"
image:
  src: "/projects_images/unihive_web_page.webp"
  alt: "UniHive-Mobile-Screen"
img_logo:
  src: "/projects_images/unihive_logo.webp"
  alt: "UniHive-Logo"
github: "https://github.com/RitaSensei/UniHive-Web-App"
technologies:
  - name: "Java"
    route: "/tech_logos/java.svg"
  - name: "Typescript"
    route: "/tech_logos/typescript.svg"
  - name: "Spring Boot"
    route: "/tech_logos/spring_boot.svg"
  - name: "React"
    route: "/tech_logos/react.svg"
  - name: "Supabase"
    route: "/tech_logos/supabase.svg"
  - name: "Figma"
    route: "/tech_logos/figma.svg"
  - name: "Google Cloud Platform"
    route: "/tech_logos/google_cloud.svg"
  - name: "Google Calendar"
    route: "/tech_logos/google_calendar.svg"
  - name: "Github Actions"
    route: "/tech_logos/github_actions.svg"
---

## Unihive Web App

UniHive is a comprehensive and efficient android application for managing club events. It facilitates the creation, promotion, and coordination of club events, making it easy for students to discover the activities offered by various clubs. It also provides students with the opportunity to join clubs at their school, thereby promoting their engagement in student life.

## Features

### 1. **User Authentication and Management**

- Create and log in to accounts with email and password.
- Administrators and super administrators validate and manage accounts.

### 2. **Event Management**

- Announce, view, and reserve tickets for events.
- Add reminders for upcoming events.
- Evaluate and rate attended events.

### 3. **Club Interaction**

- Follow clubs to receive notifications about their activities.
- Browse clubs by city, school, or interest area.
- Evaluate and rate clubs based on experiences.

### 4. **Calendar Integration**

- View a comprehensive calendar of events including competitions, hackathons, and festivals.

## Overview

### 1. **Spring Boot Backend**

- **Function**: Manages user accounts, events, and clubs. Handles user authentication, event creation, and club management. Provides RESTful APIs for the frontend to interact with.
- **Tech Stack**: Java, Spring Boot, Supabase, JWT.
- **Key Features**:
  - User authentication and authorization.
  - Event and club management.
  - Integration with Supabase for user account management.
  - Integration with Google Calendar for event scheduling.
  - Integration with Google Cloud Platform for storage.

### 2. **React Frontend**

- **Function**: Provides a user-friendly interface for students to interact with the backend services. Allows users to create accounts, view events, and join clubs.
- **Tech Stack**: TypeScript, React, Figma.
- **Key Features**:
- User account creation and login.
- Event and club browsing.
- Club following and event reservation.
- Calendar integration for event scheduling.

### 3. **Deployment**

- **Function**: Hosts the backend and frontend services on the Google Cloud Platform. Ensures high availability and scalability of the application.
- **Tech Stack**: GitHub Actions.
- **Key Features**:
- Continuous integration and deployment.

## Setup and Installation

### 1. **Prerequisites**

- JDK
- Node.js
- npm or yarn
- Supabase account

### 2. **Backend Setup**

- Clone the repository.
- Set up a Supabase project and configure the environment variables.
- Run the Spring Boot application.

### 3. **Frontend Setup**

- Clone the repository.
- Install the dependencies using npm or yarn.
- Configure the environment variables.
- Run the React application.

<div style="display: flex; justify-content: center; padding-top: 40px">
  <img src="https://img.shields.io/github/stars/RitaSensei/UniHive-Web-App" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/RitaSensei/UniHive-Web-App" alt="GitHub Last Commit" />
</div>
