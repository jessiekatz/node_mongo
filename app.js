var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h2>Hello World</h2>");
const MongoClient = require('mongodb').MongoClient;
const connStr= "mongodb+srv://newuser:1234@mycluster.brnb7re.mongodb.net/?retryWrites=true&w=majority"
	  
console.log('hey')
  MongoClient.connect(connStr, function(err, db) {
    
  if(err) { console.log(err); }
  else {
    var dbo = db.db("library");
	  var collection = dbo.collection('books');
    console.log("Success!");
	  db.close();
  }//end else
});//end connect
	res.end();
}).listen(port);
