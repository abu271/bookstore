<!-- ABOUT THE PROJECT -->
## About The Project

Welcome to our ecommerce bookstore project! Our aim is to provide book enthusiasts with a seamless and enjoyable online shopping experience. We have curated an extensive collection of books across various genres, catering to diverse reading preferences. 

<!-- GETTING STARTED -->
## Getting Started

Here are the instructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

* node version at least 16.0.0
* npm version at least 9.0.0
* vite at least 3.0.0

### Installation

Run these commands in the terminal.

  1. `cd bookstore`
  2. `npm install`
  3. `npm run dev`

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

For this project we like to follow **conventional commits**

### Summary of Conventional Commits

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. The key elements include:

- **feat**: A new feature for the user.
- **fix**: A bug fix for the user.
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing or correcting existing tests.
- **build**: Changes that affect the build system or external dependencies.
- **ci**: Changes to our CI configuration files and scripts.
- **chore**: Other changes that don't modify src or test files.
- **revert**: Reverts a previous commit.

For more details, visit the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) website.

## Project Folder Structure

To help you get familiar with the codebase, here’s a quick overview of the main folders and files in this project:

```
bookstore/
├── public/                 # Static files (favicon, index.html, etc.)
├── src/                    # Main source code for the app
│   ├── assets/             # Images, fonts, and other static assets
│   ├── components/         # Reusable UI components (e.g., buttons, forms)
│   ├── hooks/              # Custom React hooks for logic reuse
│   ├── pages/              # Page-level components (e.g., Home, Login, Book)
│   ├── App.jsx             # Main React component
│   ├── axios.js            # Axios instance and API configuration
│   └── main.jsx            # Entry point for the React app
├── .gitignore              # Files and folders to ignore in git
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation (this file)
└── vite.config.js          # Vite configuration
```

**Key Points:**
- All your React code lives in the `src/` folder.
- Use the `components/` folder for small, reusable UI pieces.
- Place custom hooks in the `hooks/` folder to keep logic organised and reusable.
- Each main page (like Login or Book details) goes in the `pages/` folder.
- The `App.jsx` file is the root component that ties everything together.

This structure helps keep the project organised and easy to maintain as it grows.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
