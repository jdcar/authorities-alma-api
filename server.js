
var express = require("express");
var PORT = process.env.PORT || 3000;

const exphbs = require('express-handlebars');

// Requiring our models for syncing
var db = require("./models");

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("./routes/api-routes");

const routes = require("./controllers/app-controller.js");

app.use(routes);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
