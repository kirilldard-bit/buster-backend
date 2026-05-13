const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {

  res.json({
    status: 'BUSTER backend running'
  });

});

app.get('/check-access', (req, res) => {

  const telegramId =
    req.query.user;

  console.log(
    'Checking access for:',
    telegramId
  );

  res.json({

    access: false,

    user: telegramId,

    subscription: null

  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {

  console.log(
    `Server running on port ${PORT}`
  );

});