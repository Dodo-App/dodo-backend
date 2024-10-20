import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import Demo from './models/demo'

const mongoURI: string | undefined = process.env.MONGODB_URI

if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined')
}

const seed = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI)

    // Delete all existing data
    await Demo.deleteMany({})

    // Create demo data
    const demoData = [
      { isDemo: true },
      { isDemo: false },
    ]
    await Demo.create(demoData)

    console.log('Successfully seeded data!')
    process.exit(0)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Seeding error:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
    process.exit(1)
  }
}

void seed()
