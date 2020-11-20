const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Article = require('./models/Article');
const app = express();

mongoose.connect("mongodb+srv://new-user001:test123@cluster0.hnyhm.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/articles', (req, res, next) =>{
  delete req.body._id;
   const article = new Article({
     ...req.body
   });
   article.save()
     .then(() => res.status(201).json({article}))//c'est ce qui me bloqué!!!!!!!!surtout metttre l'objet ({product})
     .catch(error => res.status(400).json({ error }));
 });

app.get('/api/articles/:id', (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then(article => res.status(200).json({article})) 
    .catch(error => res.status(404).json({ error }));
});

app.put('/api/articles/:id', (req, res, next) => {
  Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'ressource modifiée !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/articles/:id', (req, res, next) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Ressource supprimée !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/articles', (req, res, next) => {
  Article.find()
    .then(articles => res.status(200).json({articles}))
    .catch(error => res.status(400).json({ error }));
  });

module.exports = app;