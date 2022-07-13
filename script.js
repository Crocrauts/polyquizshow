const {MongoClient} = require("mongodb");
var counter = [0,0,0];
const Data = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://Crocrauts:Tommaso2002@polyquizshow.5nzfg.mongodb.net/test', function(err,db) {
	var database = db.db('punteggi')
	database.createCollection('vking')
	}
)

function aggiungi(p,c) {
	var spazi = ''
	counter[c] += p;
	if (p==0) {
		document.getElementById("number"+c).innerHTML = '0000'
		counter[c]=0
	}
  else {
	if (counter[c] < 0) spazi += '-'
	if (Math.abs(counter[c]) < 10) spazi += '000'
	else if (Math.abs(counter[c]) < 100) spazi += '00'
	else if (Math.abs(counter[c]) < 1000) spazi += '0'
	else spazi += ''
	document.getElementById("number"+c).innerHTML = spazi + Math.abs(counter[c])
	}
}

