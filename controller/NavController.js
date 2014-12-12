var Nav = require("../model/nav_model");
var request = require("request");


exports.index = function(req, res){
   resultsObj = Nav.get_list(request, function(results){
   res.render('index', { title :"hai" ,data: results})
});
};