# Webpack Markup Starter

Webpack Markup Starter is a development setup for building websites with **HTML**, **SCSS** and **JavaScript**.

## Technologies 👨🏻‍💻

- **webpack** (module bundler)
- **webpack-cli** (command line interface for webpack)
- **webpack-dev-server** (development server with live reload)
- **html-webpack-plugin** (automatic HTML page generation)
- **mini-css-extract-plugin** (extracts CSS into separate files for production)
- **copy-webpack-plugin** (copies static assets like images and fonts)
- **image-minimizer-webpack-plugin + sharp** (image optimization)
- **terser-webpack-plugin** (JavaScript minification)
- **babel-loader** (transpiles modern JavaScript)
- **@babel/core** (Babel core engine)
- **@babel/preset-env** (modern JavaScript support for browsers)
- **core-js** (polyfills for older browsers)
- **sass** (SCSS compiler)
- **sass-loader** (integrates SCSS with webpack)
- **css-loader** (resolves CSS imports)
- **style-loader** (injects CSS into DOM in development)
- **postcss-loader** (processes CSS with PostCSS)
- **autoprefixer** (adds vendor prefixes to CSS)
- **cssnano** (CSS optimization and minification)
- **postcss-sort-media-queries** (sorts media queries)
- **eslint** (JavaScript linting)
- **eslint-webpack-plugin** (runs ESLint during build)
- **eslint-config-prettier** (disables conflicting ESLint rules)

## Project Structure 📁

```
src/
├── fonts/          # Web fonts
├── images/         # Images and icons
├── js/
│   ├── modules/    # JavaScript modules
│   └── app.js      # Main JavaScript entry point
├── pages/
│   └── index.html  # HTML templates
└── styles/
    ├── abstracts/  # Variables, mixins, functions
    ├── base/       # Basic styles
    ├── components/ # UI components
    ├── layout/     # Layout sections
    ├── vendors/    # Third-party styles
    └── style.scss  # Main stylesheet entry point
```

## Getting Started 🚀

### 1. Clone the repository

```bash
git clone https://github.com/lvog/webpack-markup-starter.git
```

### 2. Navigate to the project folder

```bash
cd webpack-markup-starter
```

### 3. Install dependencies

Make sure you have **Node.js** installed. To check your current version:

```bash
node -v
```
If you haven't installed Node.js yet, you can download it from [official Node.js website](https://nodejs.org/).
For stable operation, it's recommended to use **v22.22.1 or higher**.
Once Node.js is installed, run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Launch the project

```bash
npm run dev
```

This will start the project in development mode.

### 5. Build the project for production

```bash
npm run build
```
All files will be generated in the **dist** folder.

## License 📄
Distributed under the MIT License. See  `LICENSE`  for more information.
