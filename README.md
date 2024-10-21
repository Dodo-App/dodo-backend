# Dodo App Backend
Dodo Backend is the backend service for the Dodo application, which connects to MongoDB using Mongoose and provides an API to manage data. This project is developed using TypeScript and Node.js.

## Prerequisites
> **Node.js v20.18.0**

> **MongoDB Atlas**

## Running the project locally
1. Open your terminal and clone the repository:
    ```sh
    git clone https://github.com/Dodo-App/dodo-backend.git
    ```

2. Change directory:
    ```sh
    cd dodo-backend
    ```

3. Install the required npm packages:
    ```sh
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file based on the `.env.example` file and fill in your MongoDB Atlas URI:
    ```sh
    cp .env.example .env
    ```

    In the `.env` file, ensure that you provide your MongoDB connection string as:
    ```
    MONGODB_URI=<your-mongodb-atlas-connection-string>
    ```

5. Run the database seed script to insert initial data:
    ```sh
    npm run seed
    ```

6. Launch the application:
    ```sh
    npm run dev
    ```

7. Open your browser and visit [http://localhost:3000](http://localhost:3000) to start interacting with the API.

## Development
To run the application in development mode with `ts-node-dev`:
```sh
npm run dev
```

## Tech Stack
- Node.js v20.18.0
- TypeScript 5.6.2
- Express.js 5.0
- MongoDB Atlas
- Mongoose 8.7.0