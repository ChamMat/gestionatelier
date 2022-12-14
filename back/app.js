const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const Users = require("./models/users");
const Messages = require("./models/messages");
const Chanels = require("./models/chanels");

mongoose.set('strictQuery', true); // Evite un messages d'avertissement dans la console.
mongoose.connect('mongodb://localhost:27017/gestionentreprise',
  { useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });




app.post('/communication/chanels', (req, res, next) => {

  const chanels = new Chanels({
    ...req.body
  });


  chanels.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/communication/chanels', (req, res, next) => {
  Chanels.find()
    .then(chanels => res.status(200).json(chanels))
    .catch(error => res.status(404).json({ error }));
});



app.post('/communication/messages', (req, res, next) => {
  const messages = new Messages({
    ...req.body
  });


  messages.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/communication/messages', (req, res, next) => {
  Messages.find()
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(404).json({ error }));
});

app.get('/communication/message/:date', (req,res,next) => {
  
})


app.post('/communication/users', (req, res, next) => {
  const users = new Users({
    ...req.body
  });


  users.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/communication/users', (req, res, next) => {
  Users.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(404).json({ error }));
});

module.exports = app;