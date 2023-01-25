import express from "express";
import { databaseConnection } from "./database.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from "cors";
import AuthRoute from './Routes/AuthRoute.js'
import FollowRoute from './Routes/FollowRoute.js'

dotenv.config();
const app = express();

// Middelware functions
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', type: 'json' }));

// Database functions
databaseConnection()

// Routes
app.get("/", (req, res) => {
    res.send("Social Media Server Welcomes You!!");
})

// Auth Router
app.use('/auth', AuthRoute)
app.use('/profile', FollowRoute)
app.use('/user/post')

// listen on
app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
})