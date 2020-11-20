// importation de express
const express = require('express');
//importation du bodyParser
const bodyParser = require('body-parser');//Rend les données du corps de la requête exploitable
// création d'une application express
const mongoose = require('mongoose');
//importation du modèle créer 
const Article = require ('./models/article');

mongoose.connect('mongodb+srv://new-user001:test123@cluster0.hnyhm.mongodb.net/blog?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })//promise
  .then(() => console.log('Connexion à MongoDB réussie !'))//promise<void>
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
const app = express();
//importation de base de donnée


//midlleware avec fonction(header empêche des erreurs cors)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//middleware qui va utiliser une méthode de bodyparser pour transformer le corps de la requête en json
app.use(bodyParser.json());

//Création d'objet à vendre(route) requête post(app.use pour appliquer sur toute les routes de l'appli)
app.get('/api/articles', (req, res, next) => {
  Article.find()//méthode qui permet d'avoir la liste compléte des articles peut contenir un objet pour par exemple cherché des things précis(date nom...)
    .then(articles => res.status(200).json({articles}))//récuparation de tous les things envoyer par la base
    .catch(error => res.status(400).json({ error }));//block error
  });//me permet lire les objets dans la base 

// exporter l'application
module.exports = app;










//rout les requête qui arrive à cette rout post ont dans cors de la requête(body de la req)toute les infor pour le nouveaux thing qui va être ajouter à la base pour pouvoir exploiter suivre code desous
// app.post('/api/articles', (req, res, next) =>{
//  delete req.body._id;
//   const article = new Article({
//     ...req.body
//   });
//   app.save()
//     .then(() => res.status(201).json({article}))//c'est ce qui me bloqué!!!!!!!!surtout metttre l'objet ({product})
//     .catch(error => res.status(400).json({ error }));
// });
//rout pour modifier mon objet
// app.put('/api/articles/:id', (req, res, next) => {
//   Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })//exploitons la méthode updateOne() dans notre modèle Thing . Cela nous permet de mettre à jour le Thing qui correspond à l'objet que nous passons comme premier argument.paramètre id passé dans la demande et le remplaçons par le Thing passé comme second argument.
//     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// });

//La méthode deleteOne() de notre modèle fonctionne comme findOne() et updateOne() dans le sens où nous lui passons un objet correspondant au document à supprimer
// app.delete('/api/articles/:id', (req, res, next) => {
//   Article.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// });

//créa rout identication d'id uniquement
//Pour trouver dans la partie lecture écriture c'est le faite de pouvoir trouver un seule objet dans la base de donnée par son identifiant
// la méthode get() pour répondre uniquement aux demandes GET à cet endpoint
//nous utilisons deux-points : en face du segment dynamique de la route pour la rendre accessible en tant que paramètre
// app.get('/api/articles/:id', (req, res, next) => {
//   Article.findOne({ _id: req.params.id })//(params.id= paramétre de rout dynamique)nous utilisons ensuite la méthode findOne() dans notre modèle Thing pour trouver le Thing unique ayant le même _id que le paramètre de la requête
//     .then(article => res.status(200).json({article}))//ce Thing est ensuite retourné dans une Promise et envoyé au front-end 
//     .catch(error => res.status(404).json({ error }));//si aucun Thing n'est trouvé ou si une erreur se produit, nous envoyons une erreur 404 au front-end, avec l'erreur générée.
// });




