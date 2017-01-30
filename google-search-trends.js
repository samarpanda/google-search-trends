var request = require('request');
var googleTrendUrl = "http://hawttrends.appspot.com/api/terms/";
var trendsByCountryUrl = "https://www.google.com/trends/hottrends/visualize/internal/data";
const ALL_REGIONS = "all_regions";

var result = function(cb){
	request(googleTrendUrl, function(error, response, body){
		if(!error && response.statusCode == 200){
			return cb(null, JSON.parse(body));
		}else{
			cb(new Error(error), null);
		}
	});
}

var trendsByCountry = function(country = ALL_REGIONS, cb){
  request(trendsByCountryUrl, function(error, response, body){
    if(!error && response.statusCode == 200){
      let result = JSON.parse(body)
      if(country === ALL_REGIONS){
        return cb(null, result)
      }else if(result.hasOwnProperty(country)){
        return cb(null, result[country])
      }else{
        return cb(new Error('Sorry trends not avaliable for '+country), null)
      }
    }else{
      return cb(new Error(error), null);
    }
  });
}

exports.result = result;
exports.trendsByCountry = trendsByCountry;