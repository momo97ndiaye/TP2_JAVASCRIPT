const RANDOM_URL ='https://www.themealdb.com/api/json/v1/1/random.php'
const recipes = document.querySelector('.recipe')
const modal = document.querySelector('.modal')
const form =  document.getElementById('form');
const search = document.getElementById('search');
getRecipe(RANDOM_URL)


function getRecipe(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.meals)
        if (data.meals.length!==0) {
            showRecipe(data.meals)
        }
    })
}
function showRecipe(data){
    let i=1
    recipes.innerHTML=''
    data.forEach(recipe => {
        const{strMealThumb,strMeal}=recipe
        const recipeEl = document.createElement('div');  
        recipeEl.classList.add(`recipe${i}`);
        recipeEl.innerHTML=`  <div class="recipe">
        <div class="window">
            <img src="${strMealThumb}" alt="${strMeal}">
            <h1>Generer une recette</h1>
            <div class="titre">
                <h2>${strMeal}</h2>
            <i class="fa-regular fa-heart" id="icone"></i>
        </div>
    </div>`
    recipes.appendChild(recipeEl)
    i++
    });

    document.getElementById('icone').addEventListener('click',()=>{
        document.getElementsByClassName("modal")[0].classList.add("active")
    })
   


    modal.innerHTML=''
    data.forEach(recipe => {
        const{strMealThumb,strMeal,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4}=recipe
        
        const recipeEl = document.createElement('div');  
        recipeEl.classList.add(`modal`);
        recipeEl.setAttribute("id",`id${i-2}`);
        recipeEl.innerHTML=`<div class="boite">
        <div class="modal-titre">
            <h2>${strMeal}</h2>
        <i class="fa-solid fa-xmark" id="delete"></i>
        </div>
        <div class="image">
            <img src="${strMealThumb}" alt="">
        </div>
        <div class="overview">
            <p>${strInstructions}</p><br>
            <h3>Ingredients:</h3><br>
            <ul>
                <li>${strIngredient1}</li>
                <li>${strIngredient2}</li>
                <li>${strIngredient3}</li>
                <li>${strIngredient4}</li>
            </ul>
        </div>
    </div>`
    modal.appendChild(recipeEl)
    i++
    });

    document.getElementById('delete').addEventListener('click',()=>{
        document.getElementsByClassName("modal")[0].classList.remove("active")
    })
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getRecipe('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchTerm)
    }else{
        getRecipe(RANDOM_URL);
    }

})
