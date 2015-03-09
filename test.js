var gSearchTrends = require('./google-search-trends');
var assert = require('assert');

gSearchTrends.result(function(err, res){
	if(!err){
		assert.deepEqual(Object.keys(res).length, 47, "Must have 47 countries top search trends");
		assert.equal(Object.keys(res).length, 47, "Result consists of 47 countries top search trends");
	} else {
		assert.ok(err);
	}
});