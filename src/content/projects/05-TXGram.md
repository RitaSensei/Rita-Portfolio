---
title: "TXGram"
publishedAt: 2025-01-15
description: "Web application that generates UML diagrams from user-provided textual descriptions and, conversely, converts UML diagrams into textual descriptions."
slug: "TXGram"
image:
  src: "/projects_images/txgram_page.webp"
  alt: "TXGram-Screen"
img_logo:
  src: "/projects_images/txgram_logo.webp"
  alt: "TXGram-Logo"
github: "https://github.com/RitaSensei/TXGram"
technologies:
  - name: "Typescript"
    route: "/tech_logos/typescript.svg"
  - name: "Langium"
    route: "/tech_logos/langium.svg"
  - name: "Next.js"
    route: "/tech_logos/nextjs.svg"
  - name: "PlantText"
    route: "/tech_logos/planttext.svg"
---

## TXGram App

Txgram is an application that generates UML diagrams from user-provided textual descriptions and, conversely, converts UML diagrams back into textual descriptions. It follows a Model-Driven Engineering (MDE) approach and operates through several key stages :
<ul style="list-style-type: disc; padding-left: 30px;">
  <li><b>User Input:</b> The user provides a description in natural language.</li>
  <li><b>LLM Transformation:</b> A Large Language Model (LLM) interprets the input and produces a structured script in the form of user stories.</li>
  <li><b>DSL Conversion:</b> The script is then transformed into a Domain-Specific Language (DSL).</li>
  <li><b>UML Diagram Generation:</b> The DSL is converted into a format compatible with the PlantUML API, which is then used to generate the corresponding UML diagram.</li>
</ul>

## Features

### 1. **Natural Language Text Input**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Allow users to input system or process descriptions in natural language.</li>
</ul>

### 2. **Voice Command Input**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Integrate a speech-to-text API to enable users to dictate their descriptions vocally.</li>
</ul>

### 3. **Interpretation via LLM**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Use a Large Language Model (LLM) to analyze and structure the textual descriptions into user stories, ready for diagram generation.</li>
</ul>

### 4. **DSL Conversion**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Convert user stories into a Domain-Specific Language (DSL) to standardize and structure the information for further processing.</li>
</ul>

### 5. **Automatic UML Diagram Generation**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Transform the DSL into UML diagrams using visualization APIs such as PlantUML.</li>
</ul>

### 6. **Reverse Conversion: Diagram to Text**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Use an image-to-text API to analyze UML diagrams and extract understandable textual descriptions from them.</li>
</ul>

### 7. **Diagram Export and Sharing**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Enable users to download or share the generated UML diagrams in multiple formats (e.g., image, PDF).</li>
</ul>

### 8. **Versioning and History Management**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Allow users to track versions and history of their diagrams, with the ability to revert to previous versions.</li>
</ul>



## Overview

### 1. **Langium-Based DSL Development**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function:</strong> Defines a custom textual Domain-Specific Language (DSL) used to structurally represent UML concepts based on user input.</li>
  <li><strong>Tech Stack:</strong> TypeScript, Langium, Node.js.</li>
  <li><strong>Key Features:</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Custom grammar design for describing systems using a structured DSL.</li>
      <li>Validation rules to ensure the correctness and consistency of the models.</li>
      <li>Automatic generation of diagram-compatible output (PlantUML syntax).</li>
    </ul>
  </li>
</ul>

### 2. **Next.js Frontend**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function:</strong> Serves as the user-facing platform where users input descriptions, view generated diagrams, and interact with various features like import/export and reverse conversion.</li>
  <li><strong>Tech Stack:</strong> TypeScript, Next.js, Tailwind CSS, Figma.</li>
  <li><strong>Key Features:</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Natural language input interface and diagram preview window.</li>
      <li>Text-to-diagram and diagram-to-text workflows.</li>
      <li>Integration with PlantUML for live rendering of UML diagrams.</li>
      <li>Export options (PNG, PDF) and diagram sharing functionality.</li>
    </ul>
  </li>
</ul>

### 3. **LLM-Powered Input & Conversion Services**

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Function:</strong> Enhances the user experience by allowing voice input and reverse diagram recognition, using AI-driven services.</li>
  <li><strong>Tech Stack:</strong> Llama 3.2-Vision, Whisper API.</li>
  <li><strong>Key Features:</strong>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Speech-to-text input for generating textual system descriptions from voice commands.</li>
      <li>Image-to-text conversion to extract structured descriptions from UML diagram images.</li>
      <li>Natural language interpretation of input using a Large Language Model (LLM).</li>
    </ul>
  </li>
</ul>



## Setup and Installation

### 1. **Prerequisites**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Node.js</li>
  <li>npm or yarn</li>
</ul>

### 2. **Setup**

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>Clone the repository.</li>
  <li>Install the dependencies using npm or yarn.</li>
  <li>Configure the environment variables.</li>
  <li>Run the application.</li>
</ul>

<div style="display: flex; justify-content: center; padding-top: 40px">
  <img src="https://img.shields.io/github/stars/RitaSensei/TXGram" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/RitaSensei/TXGram" alt="GitHub Last Commit" />
</div>
