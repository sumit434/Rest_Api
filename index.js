
// index.js - Application Entry Point
// 
// Key purpose-
//   1. Import required dependencies, middleware and mount all user routes defined in routes/users.js.
//   2. Handle unknown routes with notFoundHandler (404) and runtime errors with errorHandler (500).
//   3. Start the server and listen to given port or with default 3000

import express from 'express';
import usersRouter from './routers/user.js';
import { requestLogger } from './middleware/logger.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandlers.js';

const app = express();
const PORT = process.env.PORT || 3000;

//  express.json() → parses JSON request bodies into req.body
app.use(express.json());

// requestLogger → logs method, URL, status, and response time
app.use(requestLogger);

// Routes
app.use('/', usersRouter);

// 404 for notFoundHandler + error handling errorHandler
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
