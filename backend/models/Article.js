const mongoose = require('mongoose');
//création shéma de données+ fonction schéma mise à disposition par mongoose + passer un objet qui va dité les différents champs dans notre thing 
const articleSchema = new mongoose.Schema({
  articleTitle: { type: String, required: true},//title=clé du nom du champs entre{}c'est l'objet créer pour configurer le titre+ type= string+ autre configuration require true=champs requit
  description: { type: String, required: true},
  heroImage: { type: String, required: true},
  urlRessource: {type: String, required: true},
});

module.exports = mongoose.model('Article', articleSchema);
//pouut utiliser une autre méthode du package moogosser utiliser mon schéma pour lire et enrengistré dans la base de données 