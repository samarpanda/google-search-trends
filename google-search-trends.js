var request = require('request');
var googleTrendUrl = "http://hawttrends.appspot.com/api/terms/";

var result = function(cb){
	request(googleTrendUrl, function(error, response, body){
		if(!error && response.statusCode == 200){
			return cb(null, JSON.parse(body));
		}else{
			cb(new Error(error), null);
		}
	});
}

exports.result = result;