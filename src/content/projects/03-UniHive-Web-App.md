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

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Create and log in to accounts with email and password.</li>
  <li>Administrators and super administrators validate and manage accounts.</li>
</ul>

### 2. **Event Management**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Announce, view, and reserve tickets for events.</li>
  <li>Add reminders for upcoming events.</li>
  <li>Evaluate and rate attended events.</li>
</ul>

### 3. **Club Interaction**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Follow clubs to receive notifications about their activities.</li>
  <li>Browse clubs by city, school, or interest area.</li>
  <li>Evaluate and rate clubs based on experiences.</li>
</ul>

### 4. **Calendar Integration**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>View a comprehensive calendar of events including competitions, hackathons, and festivals.</li>
</ul>

## Overview

### 1. **Spring Boot Backend**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function :</strong> Manages user accounts, events, and clubs. Handles user authentication, event creation, and club management. Provides RESTful APIs for the frontend to interact with.</li>
  <li><strong>Tech Stack :</strong> Java, Spring Boot, Supabase, JWT.</li>
  <li><strong>Key Features :</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>User authentication and authorization.</li>
      <li>Event and club management.</li>
      <li>Integration with Supabase for user account management.</li>
      <li>Integration with Google Calendar for event scheduling.</li>
      <li>Integration with Google Cloud Platform for storage.</li>
    </ul>
  </li>
</ul>

### 2. **React Frontend**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function :</strong> Provides a user-friendly interface for students to interact with the backend services. Allows users to create accounts, view events, and join clubs.</li>
  <li><strong>Tech Stack :</strong> TypeScript, React, Figma.</li>
  <li><strong>Key Features :</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>User account creation and login.</li>
      <li>Event and club browsing.</li>
      <li>Club following and event reservation.</li>
      <li>Calendar integration for event scheduling.</li>
    </ul>
  </li>
</ul>

### 3. **Deployment**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function :</strong> Hosts the backend and frontend services on the Google Cloud Platform. Ensures high availability and scalability of the application.</li>
  <li><strong>Tech Stack :</strong> GitHub Actions.</li>
  <li><strong>Key Features :</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Continuous integration and deployment.</li>
    </ul>
  </li>
</ul>

## Setup and Installation

### 1. **Prerequisites**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>JDK</li>
  <li>Node.js</li>
  <li>npm or yarn</li>
  <li>Supabase account</li>
</ul>

### 2. **Backend Setup**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Clone the repository.</li>
  <li>Set up a Supabase project and configure the environment variables.</li>
  <li>Run the Spring Boot application.</li>
</ul>

### 3. **Frontend Setup**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Clone the repository.</li>
  <li>Install the dependencies using npm or yarn.</li>
  <li>Configure the environment variables.</li>
  <li>Run the React application.</li>
</ul>

<div style="display: flex; justify-content: center; padding-top: 40px">
  <img src="https://img.shields.io/github/stars/RitaSensei/UniHive-Web-App" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/RitaSensei/UniHive-Web-App" alt="GitHub Last Commit" />
</div>
