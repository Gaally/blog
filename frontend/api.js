//Création de variable 
let url = 'http://localhost:3000/api/articles';


// fetch va chercher les données dans le backend renvoie la liste des articles(get pour récupérer les données)
	fetch(url)
 		.then( (data) => data.json())
 		.then((articles) => generateHtml(articles))

const generateHtml = (articles) => {
 	console.log(articles)

// for permet d'appeler tous mes articles(i)
	let html = "";
	let rowDiv = document.querySelector('.row')
 		for (let i = 0; i < articles["articles"].length; i++) {
// varible dans un string ${}
 	var url = `url('${articles["articles"][i].heroImage}');`;
// html de tous mes articles
 	  	html += `
 				<div class="column">
            	<div class="heroImage" style="background-image: ${url}">
                <div class="title">${articles["articles"][i].articleTitle}</div>
            </div>
		<a href="./article.html><button class="btn" onclick="renderArticle('${articles["articles"][i]._id}')">Lire la suite</button></a>
          </div>
	 		` 		
	 console.log (url);
 }//fin de la boucle

 rowDiv.innerHTML = html
}

// var precedent = document.getElementById("precedent")
// precedent.onclick = function(){
// 	id --;
// 	fetch(`${url}${type}/${id}`)
// 	.then( (data) => data.json())
//  	.then((pokemon) => generateHtml(pokemon))
 	
// };
// //fetch me permet d'appeler les élement que je vaux afficher et les modifier
// var suivant = document.getElementById("suivant")
// suivant.onclick = function(){
// 	id ++;
// 	fetch(`${url}${type}/${id}`)
// 	.then( (data) => data.json())
//  	.then((pokemon) => generateHtml(pokemon))
//  };
