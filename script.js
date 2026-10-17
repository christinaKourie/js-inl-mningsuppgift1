const gameCategories = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    genre: "Action-Adventure"
  },
  {
    name: "Kingdom Hearts III",
    platform: "PlayStation 4",
    genre: "Action-Adventure"
  },
  {
    name: "Moominvalley",
    platform: "PC",
    genre: "RPG"
  },
  {
    name: "Tekken 7",
    platform: "PlayStation 4", 
    genre: "Fighting"
  },
  {
    name: "Super Smash Bros. Ultimate",
    platform: "Nintendo Switch",
    genre: "Fighting"
  }
];

//the games are object in array up there

//function to display games in the DOM(have to put index for the games to show)
function displayGames(gamecategory, index) {//display games in the DOM
    const gamesContainer = document.querySelector(".games");//get the container where the games will be displayed
    gameCategories.forEach((games) => {//loop through the gameCategories array
        const gameCard = document.createElement("article"); //create an article element for each game
       

//add the game details to the gameCard(also need this to be shown)
    gameCard.innerHTML = `
        <h1 class="title">${games.name}</h1>
        <p class="platform">${games.platform}</p>
        <p class="genre">${games.genre}</p>
        <button class="btn ${index}">Show Game Picture</button>
    `
    gamesContainer.append(gameCard)//append the gameCard to the gamesContainer
    });

}

displayGames()//call the displayGames function to display the games in the DOM


let buttons = document.querySelectorAll(".btn")//get all the buttons in the DOM

buttons.forEach((button, index) => {//loop through the buttons and add an event listener to each button
    button.addEventListener("click", () => {//when the button is clicked, show the game picture
        const gameCard = button.parentElement;//get the parent element of the button
    


        gameCard.classList.toggle("show-picture");//toggle the show-picture class on the game card
        alert(`You clicked on ${gameCategories[index].name}`);//show an alert with the name of the game
    });
});

//second one for picture
let images = document.querySelectorAll(".btn")//get all the buttons in the DOM

images.forEach((button, index) => {//loop through the buttons and add an event listener to each button
    button.addEventListener("click", () => {//when the button is clicked, show the game picture
        const gameCard = button.parentElement;//get the parent element of the button
    

        //image.setAttribute("src","image.png or jpg")
        gameCard.classList.toggle("show-picture");//toggle the show-picture class on the game card
        alert(` ${gameCategories[index].name}`);//show an alert with the name of the game with picture... if it works
    });
});





let menu = document.querySelector('.nav')
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener('click', () => {
  nav.classList.toggle('hidden')//this one close or hide the links not the hamburger... throw css also deals with it
})

menu.addEventListener('click', () => {
  let list = document.querySelector('.menu-list')
  list.classList.toggle('active')
})



//have to make filter in loop for my array 

//gameCategories.filter(game => game.genre === selectedGenre);

//function showGames(gamecategory, index) {

//const genre = document.getElementById("category").value;

//const filteredGames = gameCategories.filter(
    //games => games.genre === genre

//);

//const showGames (gamecategory,index)
//rendergenre(genre)

//document.getElementById("category").innerHTML =

//filteredGames.map(games => `<li>${games.title}</li>`).join("");

//}

// get the id from <select> 
const categorySelect = document.getElementById("category");

// Filter when changing category 
categorySelect.addEventListener("change", () => {
  const selectedGenre = categorySelect.value;
//if and else so that every game is visable before you choose category
  if (selectedGenre === "all") {
    displayGames(gameCategories);
  } else {
    const filteredGames = gameCategories.filter(
      game => game.genre == selectedGenre
    );

    //displayGames(filteredGames);
  }
});




