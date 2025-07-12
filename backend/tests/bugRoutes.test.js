const request = require('supertest');
const express = require('express');
const bugRoutes = require('../routes/bugRoutes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

jest.mock('../models/Bug');
const Bug = require('../models/Bug');

describe('Bug API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all bugs', async () => {
    Bug.find.mockResolvedValue([{ title: 'Bug 1', description: 'Desc 1' }]);
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should create a new bug', async () => {
    Bug.prototype.save = jest.fn().mockResolvedValue({ title: 'New Bug', description: 'Details' });
    const res = await request(app).post('/api/bugs').send({ title: 'New Bug', description: 'Details' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('New Bug');
  });
});