const theContent= document.querySelector('.main') //stocker les données

const url = `http://localhost:3000/api/articles`;

// AFFICHER UN SEUL ARTICLE :

const renderArticle = (id)=>{

fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(data => generateHtml(data));
}

const generateHtml=(art) =>{
    console.log(art)
    const article = art["article"]
    const html=`
    <div class="heroImage"><style>.heroImage{background-image:url(${article.heroImage});}</style>
        <div class="row">    
            <div class="column column-12"></div>
            <div class="column column-75 opacity">
                <h1><div class="articleTitle">${article.articleTitle}</div></h1>
            </div>
            <div class="column column-12"></div>
        </div>    
    </div>
    <div class="urlRessource"><h3><a href="${article.urlRessource}" alt="url de la ressource">${article.urlRessource}</a></h3></div>
    <div class="row">    
        <div class="column column-12"></div>
        <div class="column column-75"> 
            <div class="description"><p>${article.description}</p></div> 
        </div>
        <div class="column column-12"></div>
    </div> 
        `
        theContent.innerHTML=html 
        console.log(theContent)
}

renderArticle();