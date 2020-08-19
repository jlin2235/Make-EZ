import Axios from 'axios'


const getRecipeData = () => {
    debugger
    const YOUR_APP_ID = '6f5507b6';
    const YOUR_APP_KEY = '50592ebb8250b99cec1f597f0426fdcf';
    const searchValue = document.getElementById('search-bar').value
    const edamam = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    
    const result = Axios.get(edamam)
    .then(function (res){
            console.log(res);
            return res;
    })
    .then(res => rendercards(res.data.hits))
    debugger
}

const clearValue = () => {
    document.getElementById('search-bar').value = "";
}


const rendercards = (data) => {
    debugger
    document.getElementById('cards-container').innerHTML = 
    (data.map(el => {
        debugger
        return(
            `<div id="search-result-container">
                <img src='${el.recipe.image}'>
                <h1> <span>Name</span> ${el.recipe.label} </h1>
                <h1> <span>Calories</span> ${el.recipe.calories} </h1>
                <form target="_blank" action="${el.recipe.url}">
                    <input type="submit" value="Go to Recipe" />
                </form>
            </div>` 
        )
        
        
    }))
            
}

export const testSearch = () => {

    debugger
    const searchInput = document.getElementById('search-bar-submit-button')
    searchInput.addEventListener('click', () => {
        getRecipeData();
        clearValue();
    })
}

