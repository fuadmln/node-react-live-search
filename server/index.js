import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();
app.use(cors()); //turn off cors
app.use(express.json()); //parse and send JSON

//generate animals data randomly
const chance = new Chance();
const animals = [...Array(250).keys()].map( id => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  }
});

//endpoint for searching animals
app.get('', (req, res) => {
  //get keyword parameter
  const q = req.query.q?.toLowerCase() || '';
  //filter data with query
  const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

  res.send(results);
});

app.listen(8080, () => console.log('Listening on port http://localhost:8080'));
