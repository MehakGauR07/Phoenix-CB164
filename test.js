const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d6c00b584mshf686e22f06d04f3p1992dajsn23542f3d3ec1',
		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
	}
};


 fetch(url, options)
	.then(res => {
	console.log(res);
    })
