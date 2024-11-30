import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from "cors";
import supertokens from 'supertokens-node';
import { middleware, errorHandler } from "supertokens-node/framework/express";
import connectDB from './config/database'

import "./config/supertokens"

import demoRouter from './routes/demo'

const app = express()
const port = process.env.PORT || 8080

// Connect to database
connectDB()

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_DOMAIN || 'http://localhost:3000',
  allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

// Parse JSON
app.use(express.json())

// Supertokens middleware
app.use(middleware())

// Demo routes
app.use('/demo', demoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Supertokens error handling
app.use(errorHandler());

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`) 
})