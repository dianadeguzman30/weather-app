# weather-app


Weather App This is a command-line weather app that uses the OpenWeatherMap API to retrieve weather information for a given location.

Prerequisites Node.js and npm (which is included with Node.js) An API key from OpenWeatherMap Installation and Setup Clone this repository and navigate to the project directory:

git clone https://github.com/your-username/weather-app.git cd weather-app Install the dependencies:

npm install

Create a file called .env in the root directory of the project, and set the OPENWEATHERMAP_API_KEY variable to your OpenWeatherMap API key:

OPENWEATHERMAP_API_KEY=your-api-key Usage To get the weather for a location, run the following command:

node app.js "address" Replace "address" with the name of the location you want to get the weather for. For example:

node app.js "New York, NY" The app will retrieve the weather information for the location and print it to the console.

Built With OpenWeatherMap API - API for retrieving weather information request - HTTP client for making API requests License This project is licensed under the MIT License - see the LICENSE file for details.

Weather App Server'

This is a Node.js server for a weather app that uses the Express.js web framework and the weatherstack API to retrieve weather information for a given location.

Prerequisites Node.js and npm (which is included with Node.js) An API key from weatherstack Installation and Setup Clone this repository and navigate to the project directory: git clone https://github.com/your-username/weather-app-server.git cd weather-app-server

Install the dependencies:

npm install

Create a file called .env in the root directory of the project, and set the WEATHERSTACK_API_KEY variable to your weatherstack API key:

WEATHERSTACK_API_KEY=your-api-key

Start the server:

npm start The server will start listening for requests on port 3000.

Usage The server has the following routes:

/: Renders the home page. /about: Renders the about page. /help: Renders the help page. /weather: Accepts an address query parameter and returns weather information for that location. /products: Accepts a search query parameter and returns a list of products. Error Handling The server has the following error-handling routes:

/help/*: Renders a 404 page for any non-existent help articles. *: Renders a 404 page for all other non-existent routes or resources. Built With Express.js - Web framework for Node.js weatherstack API - API for retrieving weather information handlebars - Templating engine for rendering views License This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments OpenWeatherMap API documentation - Used as a reference for working with the weatherstack API Express.js documentation - Used as a reference for working with Express.js handlebars documentation - Used as a reference for working
