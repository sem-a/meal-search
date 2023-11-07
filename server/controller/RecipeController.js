"use strict";

const response = require("../response");
const db = require("../settings/db");

exports.all_recipe = (req, res) => {
  const sql = "select * from `recipe`";
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else response.status(result, res);
  });
};

exports.one_recipe = (req, res) => {
  const sql = "select * from `recipe` where id='" + req.query.id + "'";
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else response.status(result, res);
  });
};

exports.search_recipe = (req, res) => {
  let sql =
    "select * from `recipe` join `kitchen` on `recipe.kitchen_id`=`kitchen.id` join `type` on `recipe.type_id`=`type.id` where ";
  if (req.query.kitchen != undefined) {
    sql = sql + "kitchen=" + req.query.kitchen;
  }
  if (req.query.type != undefined) {
    sql = sql + "type=" + req.query.type;
  }
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else response.status(result, res);
  });
};
