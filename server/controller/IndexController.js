'use strict'

const response = require('../response');

exports.index = (req, res) => {
  response.status('REST API for MealSearch', res);
}
