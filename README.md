## google-search-trends [![Build Status](https://travis-ci.org/samarpanda/google-search-trends.svg?branch=master)](https://travis-ci.org/samarpanda/google-search-trends)

> Get top 20 google search trends for each country. It includes 47 countries.

```cmd
$ npm install google-search-trends
```

## Usage:

```js
var gst = require('google-search-trends');
gst.result(function(err, res){
	if(!err)
		console.log(res);
});
```

## Output

The output will be something like

```json
{ '1':
   [ 'Frank Gore',
     'Ndamukong Suh',
     'Chris Johnson',
     'Womens Day',
     'Orlando City Soccer',
     'Jeremy Maclin',
     'International Women S Day',
     'Daylight Savings Time',
     'Selma',
     'Chris Hemsworth',
     'Adrien Broner',
     'Daylight Savings Time 2015',
     'Unfinished Business',
     'Unbreakable Kimmy Schmidt',
     'Syracuse basketball',
     'The Second Best Exotic Marigold Hotel',
     'Jared Leto',
     'Melissa Benoist',
     'Harrison Ford',
     'Kim Kardashian' ],
  '3':
   [ 'Moto Turbo',
     'Bangladesh Cricket Team',
     'Aus vs SL',
     'Vinod Mehta',
     'Anushka Sharma',
     'Real Madrid',
     'Barcelona',
     'International Women S Day',
     'Happy Womens Day',
     'Saina Nehwal',
     'Womens Day Images',
     'Ireland vs Zimbabwe',
     'Womans Day',
     'Women S Day 2015',
     'cricket',
     'Pakistan cricket team',
     'When Is Holi',
     'Fifty Shades of Grey',
     'Harrison Ford',
     'Enakkul Oruvan' ],
  ...
  ...
}
```