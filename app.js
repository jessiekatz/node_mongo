const MongoClient = require('mongodb').MongoClient;
const connStr= "mongodb+srv://newuser:1234@cluster0.rjmq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	  
console.log('hey')
  MongoClient.connect(connStr, function(err, db) {
    
  if(err) { console.log(err); }
  else {
    var dbo = db.db("library");
	  var collection = dbo.collection('books');
    console.log("Success!");
	  db.close();
  }
});
