const app = require('express')();

app.all('/', (req, res) => {
  res.send("Joi is running!");
});

const keepAlive = () => {
  app.listen(3000, () => "Server is running!")
};

module.exports = keepAlive;