"use strict";

function dogToDOM(taco){
  console.log("addToLog is running");
  let outputDiv = document.getElementById("dogArea");
  let cardElements = `<table>`;

  for (let item in taco){
  	let dog_brands = taco[item].dog_brands;

    for (let item in dog_brands){
  		cardElements += `<tr></tr><tr><th>${dog_brands[item].name}</th></tr>`;

      let types = dog_brands[item].types;
  		for (let item in types){
  			cardElements += `<tr><th>${types[item].type}:</th></tr>`;

  			let volumes = types[item].volumes;
  			for (let item in volumes){
          cardElements += `<tr><td>${volumes[item].name}</td>`;
          cardElements += `<td>${volumes[item].price}<td></tr>`;
        }
      }
    }
    cardElements += `</table>`;
  }
  outputDiv.innerHTML = cardElements;
}

function catToDOM(taco){
  let outputDiv = document.getElementById("catArea");
  let cardElements = `<table>`;

  for (let item in taco){
    let cat_brands = taco[item].cat_brands;

    for (let item in cat_brands){
      cardElements += `<tr></tr><tr><th>${cat_brands[item].name}</th></tr>`;

      let breeds = cat_brands[item].breeds;
      for (let item in breeds){
        cardElements += `<tr></tr><tr><th>${breeds[item].breed}</th></tr>`;

        let types = breeds[item].types;
        for (let item in types){
          cardElements += `<tr><th>${types[item].type}:</th></tr>`;

          let volumes = types[item].volumes;
          for (let item in volumes){
            cardElements += `<tr><td>${volumes[item].name}</td>`;
            cardElements += `<td>${volumes[item].price}<td></tr>`;
          }
        }
      }
    }
    cardElements += `</table>`;
  }
  outputDiv.innerHTML = cardElements;
}

FoodCompiler.catFoodLoader(catToDOM);
FoodCompiler.dogFoodLoader(dogToDOM);







