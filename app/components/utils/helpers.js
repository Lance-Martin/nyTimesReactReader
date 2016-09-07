var axios = require('axios');

var apiCode = 'a4a45edb5a264d8291dd90482a5f7c7d';

var Helpers = {
  runQuery: function(title,startYear,endYear){
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ title +"&page=0&sort=newest&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=" + apiCode;
      // var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json/&q='+ title + "/api-key="+apiCode;

      return axios.get(queryURL)
			.then(function(response){

				return response.data.response.docs;
		});
  },
  getSaved: function(){
		return axios.get('/api/saved')
			.then(function(response){
				return response;
			});
	},
  postSaved: function(title, URL, date) {
    console.log('helper activated');
    return axios.post('/api/saved', {title: title, URL: URL, date: date}).then(function(result){
      return (result);
    });
  },
  deleteSaved: function(id) {
    return axios.delete('/api/saved/' + id).then(function(result){
      return result;
    });
  }
};

module.exports = Helpers;
