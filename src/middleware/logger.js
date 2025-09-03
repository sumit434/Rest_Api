// Logs method, URL, and status code
// 
// Purpose: Logs details about every incoming HTTP request.
//  logs: Timestamp, HTTP method, Request URL, Response status code, Response time 

export function requestLogger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
}
