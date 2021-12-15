# React Express Template

Basic template for React in Express with Heroku support

# How to use

If you run into any problems, create a new issue for this repo and I will try to help.

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

## Heroku Setup

1. Link your folder to a GitHub repository
2. Go to https://dashboard.heroku.com and create an account if needed
3. Press New > Create New App
4. Choose a name and region, then click Create App
5. In the navigation bar, click Deploy
6. Select GitHub under Deployment Method
7. Connect your GitHub account if needed
8. Connect your repository by searching it
9. Click Enable Automatic Deploys if you want it to restart everytime you push to the repo
10. Deploy the app by by clicking Deploy Branch (Make sure `main` is selected)
11. When the build finishes, you should be able to view your app under `http://{your app name}.herokuapp.com`
12. To view the logs, go to the heroku app page and click More (Top right) > View logs

## Modules & Frameworks

By default, this package uses these frameworks, languages, and modules

### Client

- NodeJS (JavaScript)
- React
- Html
- Scss

### Server

- NodeJS (JavaScript)
- Express

### Optional Hosting

- GitHub
- Heroku

### Recommended

- VSCode
- - Code Runner extension
- - Compile Hero (For Scss)
- - Source control (For GitHub)

## File Structure

Simplified file tree

```py
./ # Root folder (react-express-template)
│
├── server/ # All server files
│   └── server.js # Main server file
│
└── client/ # All client files
    ├── public/ # Static files (Not including font)
    │   ├── index.html # Main html, Nothing in here
    │   └── image/... # Images, obviously
    │
    └── src/ # Dynamic React files
        ├── index.js # Main React file
        │
        ├── pages/ # Basically the urls
        │   ├── ... # Home, Contact, Error404
        │   └── Layout.js # Main file for layout: Header, Contact link, ect.
        │
        ├── js/ # React js files for components
        │   └── ... # Components that would get reused
        │
        ├── scss/ # Styles in scss
        │   └── ... # Corresponding to js folder
        │
        ├── css/ # Compiled and minified from scss
        │
        └── font/... # Any fonts (Empty by default)
```
