const MongoClient = require('mongodb').MongoClient;
const connStr= "mongodb+srv://newuser:123@mycluster.brnb7re.mongodb.net/?retryWrites=true&w=majority"
	var http = require('http');
var port = process.env.PORT || 3000;
console.log("This goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Hello World</h2>");
  res.write ("Success!  This app is deployed online");
  console.log('hey')
  MongoClient.connect(connStr, function(err, db) {
    
  if(err) { console.log(err); }
  else {
	  var dbo = db.db("library");
	  var collection = dbo.collection('books');
	  res.write(collection.findOne());
	  db.close();
    }
  });
	
   res.end();
}).listen(port);


