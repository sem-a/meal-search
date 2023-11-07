'use strict';

module.exports = (app) => {
  const indexController = require('./../controller/IndexController');
  const recipeController = require('./../controller/RecipeController');
  const kitchenController = require('./../controller/KitchenController');
  const typeController = require('./../controller/TypeController');

  app.route('/').get(indexController.index);

  app.route('/recipe/all').get(recipeController.all_recipe);
  app.route('/recipe/one').get(recipeController.one_recipe);

  app.route('/kitchen/all').get(kitchenController.all_kitchen);
  
  app.route('/type/all').get(typeController.all_type);
};