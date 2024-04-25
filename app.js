const MongoClient = require('mongodb').MongoClient;
const http = require('http');

const connStr = "mongodb+srv://newuser:123@mycluster.brnb7re.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 3000;

console.log("This goes to the console window");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Hello World</h2>");
  res.write ("Success!  This app is deployed online");
  console.log('hey');

  MongoClient.connect(connStr, function(err, db) {
    if (err) {
      console.log(err);
      res.end(); 
    } else {
      var dbo = db.db("library");
      var collection = dbo.collection('books');
      
      collection.findOne({}, function(err, result) {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(JSON.stringify(result));
          db.close();
          res.end(); 
        }
      });
    }
  });
}).listen(port);
