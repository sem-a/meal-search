const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql.freedb.tech',
  port: '3306',
  user: 'freedb_sem-a',
  password: '4fPSx&yehxvkMtb',
  database: 'freedb_meal_search',
});

connection.connect( (err) => {
  if(err) {
    return console.log('Ошибка подключения: ' + err.message);
  } else {
    return console.log('Подключение успешно');
  }
})


module.exports = connection;