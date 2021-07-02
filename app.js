var express = require("express");
var bodyParser = require("body-parser");
var logger = require('morgan');

var app = express();
var port = 3003;

// Import routes
//let apiRoutes = require("./routes/index");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/index"));


// Database Connections
const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handlers
// Development error handler: will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({ error: err });
    });
}

// Production error handler: no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

// Run
app.listen(port, function(err) {
    console.log("Running API server on from port::::" + port);
});