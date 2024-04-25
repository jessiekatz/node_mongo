const MongoClient = require('mongodb').MongoClient;
const connStr= "mongodb+srv://newuser:123@mycluster.brnb7re.mongodb.net/?retryWrites=true&w=majority"
	  
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
