import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({});
});

app.listen(3000);