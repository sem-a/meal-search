'use strict'

const response = require('../response');
const db = require('../settings/db');

exports.all_recipe = (req, res) => {
    const sql = "select * from `recipe`";
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        else response.status(result, res);
    });
}
