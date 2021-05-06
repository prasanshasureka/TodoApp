const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todo_list_db');
mongoAtlasUri = 'mongodb+srv://prasansha:prasansha@cluster0.xjr2n.mongodb.net/todo_list_db?retryWrites=true&w=majority';

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to db'));
db.once('open', function(){
    console.log('Succesfully connected to DB');
});