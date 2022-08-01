const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    const character = await Character.getAll();
    console.log(character);
    res.json(character);
  });


