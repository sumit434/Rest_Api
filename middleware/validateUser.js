// Validation middleware for POST & PUT
// -------------------------------------
// Ensures that the request body contains all the required fields :id, firstName, lastName, hobby.
// If any of the user fields are missig missing → responds with HTTP 400 (Bad Request) and an error message.

export function validateUser(req, res, next) {
  const required = ['id', 'firstName', 'lastName', 'hobby'];
  const missing = required.filter(f => !(f in req.body) || req.body[f] === '');
  
  if (missing.length > 0) {
    return res.status(400).json({
      error: 'Invalid input',
      details: `Missing required field(s): ${missing.join(', ')}`
    });
  }
  next();
}
