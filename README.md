# Meta-Music-System(ADT-Project)
Spring 2024 ADT Project

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```


2. Navigate to the project directory:
```bash
cd your-repo
```

3. Install the dependencies:
```bash
npm install
```
4. Start the development server:

```bash
Start the development server:
```

The application should now be running at http://localhost:3000.


## Tailwind CSS and Daisy UI Setup
This project uses Tailwind CSS and Daisy UI for styling. Here's how they are set up:

## Tailwind CSS
Tailwind CSS is installed and configured according to the official installation guide. The tailwind.config.js file is set up with the required content paths, and the Tailwind CSS directives are included in the src/index.css file.

## Daisy UI
Daisy UI is installed as a plugin for Tailwind CSS. It is configured in the tailwind.config.js file by adding the require("daisyui") line to the plugins array. The Daisy UI styles are imported in the src/index.css file using @import 'daisyui/src/colors/themes';.

## Building for Production
### To create a production build, run:
```bash
npm run build
```


This will create an optimized build of the application in the build directory.
## Technologies Used

    React
    Tailwind CSS
    Daisy UI

## License
This project is licensed under the MIT License.

