exports.get_list= function(request, callback){
	request.get("http://foofys.styletag.in/api/categories/c1", function (err, res, body) {
        return callback(JSON.parse(body));
});
}

