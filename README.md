# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Weather Dashboard

A weather dashboard built with React and Vite that allows users to search for a city and view its current temperature and wind speed using the Open-Meteo API.

## Features
- Search for weather by city.
- Display current temperature and wind speed.
- Loading indicator while fetching data.
- Error messages for invalid cities or failed requests.
- Reusable React components.
- Responsive design.

## Technologies Used
- React
- Vite
- JavaScript
- CSS
- Open-Meteo API

## Components
- **App:** Manages application state and fetches weather data.
- **SearchBar:** Allows users to search for a city.
- **WeatherCard:** Displays weather information.
- **LoadingSpinner:** Displays a loading message.
- **ErrorMessage:** Displays error messages.

## Installation and Usage

### Prerequisites
Install [Node.js](https://nodejs.org/) and npm.

## How to Open the Application

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open the terminal in the project folder.
4. Run `npm install` to install the required dependencies.
5. Run `npm run dev` to start the development server.
6. Open the local URL displayed in the terminal in your web browser.

Note: Node.js and npm must be installed before running the application.