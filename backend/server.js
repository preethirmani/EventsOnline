import express from 'express';
import dotenv from 'dotenv';
import programs from './data/programs.js';

const app = express();
dotenv.config();

//routes
app.get('/api/programs', (req, res) => 
  res.json()
);

app.get('/api/program/:id', (req, res) => {
  const program =  programs.find(p => {
    String(p._id) === req.params.id
  })
  res.json(program);
})

app.get('/api/program/search/:name', (req, res) => {
  const program = programs.find(p => {
    p.name === req.params.name
  })
  res.json(program);
})