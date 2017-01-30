var gst = require('./google-search-trends');
var assert = require('assert');

gst.result(function(err, res){
	if(!err){
		assert.deepEqual(Object.keys(res).length, 47, "Must have 47 countries top search trends");
		assert.equal(Object.keys(res).length, 47, "Result consists of 47 countries top search trends");
	} else {
		assert.ok(err);
	}
});

gst.trendsByCountry('all_regions', function(err, res){
  if(!err){
    assert.deepEqual(Object.keys(res).length, 47, "Must have 47 countries top search trends");
    assert.equal(Object.keys(res).length, 47, "Result consists of 47 countries top search trends");
  } else {
    assert.ok(err);
  }
});

gst.trendsByCountry('india', function(err, res){
  if(!err){
    assert.equal(res.length, 20)
  }else{
    assert.ok(err)
  }
})

gst.trendsByCountry('sp', function(err, res){
  if(!err){
    assert.ok(err)
  }else{
    assert.equal(err.toString(), 'Error: Sorry trends not avaliable for ' + 'sp');
  }
})