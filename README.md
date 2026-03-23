# Faultline - Poverty & Globalization

**Faultline** is an interactive digital project exploring socio-economic data, wealth inequality, human rights, and the historical impacts of colonialism on global poverty. 

## Overview
The project is designed to present data-driven narratives about the global wealth gap, starting from the systemic extraction of wealth to ongoing paths for progress. Users can explore informative articles, interactive geographic mapping, and educational simulations.

## Features
- **Interactive Global Heatmap:** Visualizes poverty populations across different countries using Plotly.js.
- **Educational Perspectives:** Deep dives into distinct types of poverty (absolute, relative, situational, intergenerational).
- **Multi-page Layout:** Delivers a structured experience spanning the landing page, readings, interactions, and a custom simulation.
- **Modern User Interface:** Utilizes scroll animations and responsive CSS grids for strong user engagement.

## Tech Stack
- **Structure & Style:** HTML5, CSS3 
- **Interactivity:** Vanilla JavaScript
- **Libraries & Assets:**
  - [Plotly.js](https://plotly.com/javascript/) for rendering complex data charts.
  - [FontAwesome](https://fontawesome.com/) for iconography.

## Project Structure
- `index.html`: The main landing and navigational page showing poverty fundamentals.
- `interact.html`: Dedicated to interactive engagement, potentially featuring a quiz.
- `read.html`: Houses detailed, long-form articles.
- `simulation.html`: The interactive simulation environment.
- `styles/`: Modular and component-specific CSS files (`hero.css`, `navbar.css`, `poverty-map.css`, etc.)
- `scripts/`: Client-side logic separated by functionality (`reveal.js`, `poverty-map.js`, `quiz.js`, etc.)