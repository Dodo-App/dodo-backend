import mongoose, { ConnectOptions} from 'mongoose'

const clientOptions: ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  }
}

const mongoURI: string | undefined = process.env.MONGODB_URI

if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined')
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, clientOptions)
    console.log('Successfully connected to MongoDB!')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
    process.exit(1)
  }
}

export default connectDB