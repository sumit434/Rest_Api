// notFoundHandler middleware
// 
// Purpose: Handles requests to routes that are not defined in the app.
export function notFoundHandler(req, res, next) {
  res.status(404).json({ error: 'Resource not found', path: req.originalUrl });
}


// errorHandler middleware
// 
// Purpose: Centralized error handling for runtime errors or errors passed using next for the entire app.
export function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}
