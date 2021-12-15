# React Express Template

Basic template for React in Express with Heroku support

# How to use

## Installation

```powershell
# Clone repository into ./trustworthytimes folder
git clone https://github.com/darccyy/react-express-template.git

# Install dependencies
npm run install-all
```

## Development

Runs 2 server programs (Using concurrently):

- Client with React
- Server with Express & Nodemon

Corresponding server soft restarts when file is saved.

```powershell
# Start development server
npm run start:dev
```

## Production

```powershell
# Build production (Also reinstalls modules)
npm run build

# Start production server
npm run start
```

## Modules & Frameworks

Build with:

### Client

- NodeJS
- React
- Scss

### Server

- NodeJS
- Express

### Optional Hosting

- GitHub
- Heroku

### Recommended

- VSCode

## File Structure

Simplified file tree:

```py
./ # Root folder (react-express-template)
├── server/ # All server files
│   └── server.js # Main server file
└── client/ # All client files
    ├── public/ # Static files (Not including font)
    │   ├── index.html # Main html, Nothing in here
    │   └── image/... # Images, obviously
    └── src/ # Dynamic React files
        ├── index.js # Main React file
        ├── font/... # Any fonts
        ├── functions/... # Small functions for js files
        ├── pages/ # Basically the urls
        │   ├── ... # Home, Contact, Error404
        │   └── Layout.js # Main file for layout: Header, Contact link, ect.
        ├── js/ # React js files for components
        │   └── ... #
        ├── scss/ # Styles in scss
        │   ├── ... # Corresponding to js folder
        └── css/ # Compiled from scss
```
