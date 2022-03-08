const express = require('express');

const app = express();
const port = process.env.port || 3000;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || "development"]);

app.use(bodyParser.json());

app.get('/movies', function (req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch( err =>
      res.status(404).json({
        message:
        'The data you are looking for could not be found.'
    })
  );
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


