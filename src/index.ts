import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from "cors";
import supertokens from 'supertokens-node';
import { middleware, errorHandler } from "supertokens-node/framework/express";
import config from './config'
import connectDB from './config/database'
import { SuperTokensConfig } from "./config/supertokens"

// SuperTokens Initialization
// supertokens.init(SuperTokensConfig);
try {
  supertokens.init(SuperTokensConfig);
  console.log("SuperTokens initialized successfully");
} catch (error) {
  console.error("Failed to initialize SuperTokens:", error);
}

import demoRouter from './routes/demo'

const app = express()
const port = process.env.PORT || 8080

// Connect to database
connectDB()

// Enable CORS
app.use(cors({
  origin: config.frontendDomain,
  allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

// Parse JSON
app.use(express.json())

// Supertokens middleware
app.use(middleware())

// Demo routes
app.use('/demo', demoRouter)

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/auth/callback/google', (req, res) => {
  res.send('Hello auth/callback/google!')
})

// Supertokens error handling
app.use(errorHandler());

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
});