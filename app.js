var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient

/*MongoClient.connect('mongodb://localhost:27017/indial', function (err, db) {
  if (err) throw err

  db.collection('restaurants').find().toArray(function (err, result) {
    if (err) throw err
    console.log(result)
  })
})
*/

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
