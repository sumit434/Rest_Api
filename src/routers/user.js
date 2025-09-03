// users.js - Routes for User CRUD operations
//  This file defines all REST API endpoints for managing users.

import { Router } from 'express';
import { validateUser } from '../middleware/validateUser.js';

const router = Router();

// Data source: In-memory array `users` (no database).
const users = [
  { id: '1', firstName: 'Anshika', lastName: 'Agarwal', hobby: 'Teaching' },
  { id: '2', firstName: 'Rahul', lastName: 'Sharma', hobby: 'Cricket' }
];

// Find index of a user by ID

function findIndexById(id) {
  return users.findIndex(u => u.id === id);
}

// GET /users
// Fetch the full list of users.

router.get('/users', (req, res) => res.status(200).json(users));

// GET /users/:id
// Fetch details of a specific user by ID.

router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

// POST /user
// Create a new user. validateUser only when Middleware ensures all required fields are present.

router.post('/user', validateUser, (req, res) => {
  if (users.some(u => u.id === req.body.id)) {
    return res.status(400).json({ error: 'User with this id already exists' });
  }
  users.push(req.body);
  res.status(201).json(req.body);
});

// PUT /user/:id
// Purpose: Update an existing user by ID only when validateUser → ensures all required fields are present.

router.put('/user/:id', validateUser, (req, res) => {
  const idx = findIndexById(req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  if (req.body.id !== req.params.id && users.some(u => u.id === req.body.id)) {
    return res.status(400).json({ error: 'Another user with this id already exists' });
  }
  users[idx] = req.body;
  res.status(200).json(users[idx]);
});

// DELETE /user/:id
//  Delete a user by ID.

router.delete('/user/:id', (req, res) => {
  const idx = findIndexById(req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  const removed = users.splice(idx, 1)[0];
  res.status(200).json({ message: 'User deleted', user: removed });
});

export default router;
