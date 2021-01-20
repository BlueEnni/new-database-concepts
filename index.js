const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const app = express();
const redisClient = redis.createClient();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hallo Welt');
});

app.get('/chats/:id', (req, res) => {
  redisClient.lrange(`chat.${req.params.id}`, 0, -1, (err, data) => {
    if (err) {
      console.error('err');
      res.statusCode(500).send('Error');
    } else {
      res.send(data);
    }
  });
  app.post('/chats/:id', (req, res) => {
    console.log(req.body.message);
    redisClient.rpush(`chat.${req.params.id}`, req.body.message, (err, data) => {
      if (err) {
        console.error('err');
        res.statusCode(500).send('Error');
      } else {
        res.send('OK');
      }
    })
  })
});

app.listen(3000);
console.log('Listening on port 3000');