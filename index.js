// const express = require('express') <-- This is the default way of importing -->
import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos.routes.js';
import cors from 'cors';


//create an express App
const app = express();

//use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//Use routes
app.use(todosRoutes);

// telling the app to listen for incoming requests
app.listen(4000, () => {
    console.log('Express app is running')
});