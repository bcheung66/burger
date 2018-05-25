// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Create express app instance.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// var viewsPath = path.join(__dirname, '/app/views');
var viewsPath = '../views';  
/* app.set('views', viewsPath);   */
/* var hbs = exphbs.create({  
  defaultLayout: 'main',  
  layoutsDir: viewsPath + '/layouts',  
  partialsDir: viewsPath + '/layouts/partials'
}); */

/* app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'layouts', 'partials')}
)); */

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
