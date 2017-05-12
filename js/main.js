"use strict";

function dogToDOM(taco){
  console.log("addToLog is running");
  let outputDiv = document.getElementById("dogArea");
  let cardElements = `<table>`;
  // console.log("taco.dog_brands", taco.dog_brands);
  for (let item in taco){
  	let dog_brands = taco[item].dog_brands;
  	for (let item in dog_brands){
  		console.log("dog_brands[item].name", dog_brands[item].name);
  		cardElements += `<tr></tr><tr><th>${dog_brands[item].name}</th></tr>`;

      let types = dog_brands[item].types;
  		for (let item in types){
  			console.log("item", item, "types[item].type", types[item].type);
  			cardElements += `<tr><th>${types[item].type}:</th></tr>`;

  			let volumes = types[item].volumes;
  			for (let item in volumes){
          // // console.log("dog_brands[item].name", dog_brands[item].name);
          // console.log("item", item, "types[item].type", types[item].type);
          console.log("volumes[item].name", volumes[item].name);
          console.log("volumes[item].price", volumes[item].price);
          cardElements += `<tr><td>${volumes[item].name}</td>`;
          cardElements += `<td>${volumes[item].price}<td></tr>`;
        }
      }
    }
    console.log("made it to end of 'addToLog'");
    cardElements += `</table>`;
  }
  outputDiv.innerHTML = cardElements;
}

function catToDOM(taco){
  console.log("addToLog is running");
  let outputDiv = document.getElementById("catArea");
  let cardElements = `<table>`;
  // console.log("taco.dog_brands", taco.dog_brands);
  for (let item in taco){
    let cat_brands = taco[item].cat_brands;
    for (let item in cat_brands){
      console.log("cat_brands[item].name", cat_brands[item].name);
      cardElements += `<tr></tr><tr><th>${cat_brands[item].name}</th></tr>`;

      let breeds = cat_brands[item].breeds;
      for (let item in breeds){
        console.log("breeds[item].breed", breeds[item].breed, "item", item);
        cardElements += `<tr></tr><tr><th>${breeds[item].breed}</th></tr>`;
      // let types = cat_brands[item].types;
        let types = breeds[item].types;
        for (let item in types){
          console.log("item", item, "types[item].type", types[item].type);
          cardElements += `<tr><th>${types[item].type}:</th></tr>`;

          let volumes = types[item].volumes;
          for (let item in volumes){
            // // console.log("dog_brands[item].name", dog_brands[item].name);
            // console.log("item", item, "types[item].type", types[item].type);
            console.log("volumes[item].name", volumes[item].name);
            console.log("volumes[item].price", volumes[item].price);
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

// let dogFood = [{
//   "dog_brands": [
//     {
//       "name": "Chuck wagon",
//       "types": [
//         {
//           "type": "all_natural",
//           "volumes": [
//             {
//               "name": "32oz",
//               "price": 9.99
//             },
//             {
//               "name": "64oz",
//               "price": 17.99
//             }
//           ]
//         },
//         {
//           "type": "standard",
//           "volumes": [
//             {
//               "name": "58oz",
//               "price": 12.99
//             },
//             {
//               "name": "72oz",
//               "price": 21.99
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Purina",
//       "types": [
//         {
//           "type": "puppy",
//           "volumes": [
//             {
//               "name": "16oz",
//               "price": 8.99
//             },
//             {
//               "name": "24oz",
//               "price": 14.99
//             }
//           ]
//         },
//         {
//           "type": "standard",
//           "volumes": [
//             {
//               "name": "58oz",
//               "price": 19.99
//             },
//             {
//               "name": "72oz",
//               "price": 24.99
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }];
// // code example
// for (n in brands) {
//             //console.log(brands[n]);
//             writer += `<h2>`+brands[n].name+`</h2>`;
//             brandType = brands[n].types;
//             for (j in brandType) {
//                 console.log(brandType[j]);
//                 writer += `<p>`+brandType[j].type+`</p>`;
//                 volume = brandType[j].volumes;
//                 for(i in volume) {
//                     console.log(volume[i]);
//                     writer += `<p>`+volume[i].name+`</p>`;
//                     writer += `<p>`+volume[i].price+`</p>`;
//                 }
//             }
//         }

 // let outputDiv = document.getElementById("testArea");
 //  let cardElements = `<table>`;
 //  // console.log("taco", taco);
 //  for (item in dogFood){
 //    let dog_brands = dogFood[item].dog_brands;
 //    for (item in dog_brands){
 //      console.log("dog_brands[item].name", dog_brands[item].name);
 //      cardElements += `<tr></tr><tr><th>${dog_brands[item].name}</th></tr>`;

 //      let types = dog_brands[item].types;
 //      for (item in types){
 //        console.log("item", item, "types[item].type", types[item].type);
 //        cardElements += `<tr><th>${types[item].type}:</th></tr>`;

 //        let volumes = types[item].volumes;
 //        for (item in volumes){
 //          // // console.log("dog_brands[item].name", dog_brands[item].name);
 //          // console.log("item", item, "types[item].type", types[item].type);
 //          console.log("volumes[item].name", volumes[item].name);
 //          console.log("volumes[item].price", volumes[item].price);
 //          cardElements += `<tr><td>${volumes[item].name}</td>`;
 //          cardElements += `<td>${volumes[item].price}<td></tr>`;
 //        };
 //      };
 //    };
 //    cardElements += `</table>`;
 //  };
 //  outputDiv.innerHTML = cardElements;






