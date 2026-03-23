# Faultline - Poverty & Globalization

**Faultline** is an interactive digital project exploring socio-economic data, wealth inequality, human rights, and the historical impacts of colonialism on global poverty. 

## Overview
The project is designed to present data-driven narratives about the global wealth gap, starting from the systemic extraction of wealth to ongoing paths for progress. Users can explore informative articles, interactive geographic mapping, and educational simulations.

## Features
- **Interactive Global Heatmap:** Visualizes poverty populations across different countries using Plotly.js.
- **Educational Perspectives:** Deep dives into distinct types of poverty (absolute, relative, situational, intergenerational).
- **Responsive Data Visualizations:** Fishbone diagrams and data tables are fully optimized for mobile devices using advanced CSS Grid layouts and semantic structures.
- **Engaging Quizzes:** Real-time feedback, deep-dive analysis quizzes, and endgame effects (confetti and adaptive sound effects).
- **Refined Simulations:** Three unique role-playing scenarios with expanded narrative flavor text, balanced difficulty, and multi-variable gameplay impacts.
- **Comprehensive References:** Easy access to a downloadable `References.pdf` covering all data sources.

## Tech Stack
- **Structure & Style:** HTML5, CSS3 (including fully responsive Flexbox & CSS Grid)
- **Interactivity:** Vanilla JavaScript
- **Libraries & Assets:**
  - [Plotly.js](https://plotly.com/javascript/) for rendering complex data charts.
  - [FontAwesome](https://fontawesome.com/) for iconography.
  - Custom Confetti & Sound Effects for quiz engagement.

## Project Structure
- `index.html`: The main landing and navigational page showing main concepts, heatmap, and fishbone causality diagrams.
- `interact.html`: Dedicated to interactive engagement, featuring data quizzes, and simulations.
- `read.html`: Houses detailed, long-form investigative articles.
- `simulation.html`: The interactive simulation environment.
- `styles/`: Modular and component-specific CSS files (`hero.css`, `navbar.css`, `components.css`, `quiz.css`, etc.)
- `scripts/`: Client-side logic separated by functionality (`reveal.js`, `poverty-map.js`, `quiz.js`, etc.)