import {user, password} from "dbuser";

const MongoClient = require('mongodb').MongoClient;

let user = { name };
let password = { password };
let dbname = "TeamUp";

const uri = `mongodb+srv://${user}:${password}@cluster0.0kspx.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});
