# Personal Blog Challenge

## Resume

This project was a challenge for a job vacancy.
This is a simplified personal blog. In the description of the challenge, 2 routes from the site were made available [mocky.io](https://www.mocky.io/) for consumption of information.

**OBS:** *The routes currently in the application are not the same as those given by the company*.

The challenges of this project are as follows: 

 - **Sort posts** - Ascending or descending display order; 
 - **Filter by author** - Filter publications by author; 
 - **Summary of publications** - List with the most recent publications; 
 - **List of publications** - Display the list of all publications;
 - **The use of UI frameworks is not allowed** - Bootstrap example;

## Application

### Scripts

 - `npm start` : Run the development environment within the webpack-dev-server; 
   
  - `npm run build` : Generates the *bundle* for production;
  
  - `npm test` : Run all tests;

### Technology

The application contains the following technologies:

 - Axios; 
 - History; 
 - React-router-dom; 
 - React-transition-group; 
 - Webpack;
 - Webpack-cli; 
 - Webpack-dev-server; 
 - Jest; 
 - @testing-library;

It was requested that the application uses the **Webpack** to generate the *bundle* and that development be linked to it also from the **Webpack-dev-server**. From that, 2 scripts were made available:

 - start:  "webpack-dev-server --config ./webpack.config.js"; 
 - build: "webpack --mode production";

For the tests I used the **Jest** and **@testing-library** and to run them a script was also made available:

 - test:  "jest";

### Application Structure

 - __ mocks __ : Contains a .js file that mocks images for *jest*;
 
 - public : Contains the main application html; 
 
 - src : Contains the application with the following architecture:
	 
	 - assets : Contains all additional features like photos and global files;
	 
	 - components : Contains all components;
	 
	 - services : Contains all connections to endpoints;
	 
	 - utils : Snippets to be used in various files within the application;
	 
	 - views : Contains all screens;
	 
	 - App.js;
	 
	 - index.js;
	 
	 - routes.jsx : Contains all internal routes of the application;
 
 - test : It contains two folders that are the division of tests for **integration** of services and **unitary** for components;
 
 - babel.config.js : Contains the configuration of plugins and presets for the webpack;
 
 - webpack.config.js : Contains all the configuration to handle the project, such as loader rules and upload a server for development;
