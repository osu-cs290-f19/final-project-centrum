/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: colston warne
 * Email: warnec@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var saleData = require('./sales.json')

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.status(200).render('sales', {
    sales: saleData,
    singularPost: false,
    multiPost: false,
    renderHome: true,
    renderNormal: false,
    renderAbout: false,
    is404: false
  });
});


app.get('/about', function(req, res) {
  res.status(200).render('sales', {
    sales: saleData,
    singularPost: false,
    multiPost: false,
    renderHome: false,
    renderNormal: false,
    renderAbout: true,
    createpost: false,
    is404: false
  });
});

app.get('/viewsales', function(req, res) {
  res.status(200).render('sales', {
    sales: saleData,
    singularPost: false,
    multiPost: true,
    renderHome: false,
    renderNormal: true,
    renderAbout: false,
    createpost: false,
    is404: false
  });
});

app.get('/createsale', function(req, res) {
  res.status(200).render('sales', {
    sales: saleData,
    singularPost: false,
    multiPost: false,
    renderHome: false,
    renderNormal: true,
    renderAbout: false,
    createpost: true,
    is404: false
  });
});

app.get('*', function(req, res) {
  res.status(404).render('sales', {
    singularPost: false,
    multiPost: false,
    renderHome: false,
    renderNormal: false,
    renderAbout: false,
    createpost: false,
    is404: true
  });
});

app.listen(port, function() {
  console.log("== Server is listening on port", port);
});
