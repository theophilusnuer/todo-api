import { Router } from "express";
import { MongoClient } from "mongodb";

//create a router
const router = Router();
const url =
  "mongodb+srv://todo-api:0VNOfTbGwAG0SVdI@webdev-theo.nrbbku7.mongodb.net/?retryWrites=true&w=majority&appName=webdev-theo";
const client = new MongoClient(url);
const todoDb = 'todo-db';
const todoCollection = 'todos';




//Define routes
router.post("/todos", async (req, res) => {
  //connect the mongo client
  await client.connect();
  //Get access to database
  const db = client.db(todoDb);
  //Get access to todos collection in the database
  const collection = db.collection(todoCollection);
  //add todo to the todos collection
  const insertOneResult = await collection.insertOne(req.body);
  //disconnect the mongo client
  await client.close();
  //return response
  res.json (insertOneResult);
});

router.get("/todos", async(req, res) => {
   //connect the mongo client
  await client.connect();
  //Get access to database
  const db = client.db(todoDb);
  //Get access to todos collection in the database
  const collection = db.collection(todoCollection);
  //Get all todos from todos collection
  const findResult = await collection.find().toArray();
  //disconnect the mongo client
  await client.close();
  //return response
  res.json (findResult);
});

//deleting the todos
router.delete("/todos", async(req, res) => {
  //connect the mongo client
 await client.connect();
 //Get access to database
 const db = client.db(todoDb);
 //Get access to todos collection in the database
 const collection = db.collection(todoCollection);
 //Get all todos from todos collection
 const deleteResult = await collection.deleteMany(req.body);
 //disconnect the mongo client
 await client.close();
 //return response
 res.json (deleteResult);
});


router.get("/todos/:id", (req, res) => {
  res.send("Get single todo!");
});

router.patch("/todos/:id", (req, res) => {
  res.send("Update a single todo!");
});

router.delete("/todos/:id", (req, res) => {
  res.send("Delete a single todo!");
});

//Export router
export default router;
