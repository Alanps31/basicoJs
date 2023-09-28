const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Gitpod');
});

app.listen(3030, (err) => {
  if (err) {
    console.log('erro no app');
  } else {
    console.log('servidor rodando na porta 3030');
  }
});
