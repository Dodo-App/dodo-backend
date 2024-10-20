import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from './config/database'
import demoRouter from './routes/demo'

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())

app.use('/demo', demoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`) 
})