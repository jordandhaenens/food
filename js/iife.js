"use strict";
var FoodCompiler = (function(){

	var dogFood = [];
	let catFood = [];


	return {
		dogFoodLoader: function(callbackToInvoke){
			var request = new XMLHttpRequest();
			request.addEventListener("load", loadComplete);
			request.addEventListener("error", loadError);

			function loadComplete(event){
				// console.log("event is ", event);
				let dogFoods = JSON.parse(event.target.responseText);
				dogFood.push(dogFoods);
				console.log("dogFood", dogFood);
				callbackToInvoke(dogFood);
				// console.log(callbackToInvoke);
			}
			function loadError(event){
				console.log("There was an error loading JSON");
			}

			request.open("GET", "./js/dogFood.json");
			request.send();

		},

		catFoodLoader: function(callbackToInvoke){
			var request = new XMLHttpRequest();
			request.addEventListener("load", loadComplete);
			request.addEventListener("error", loadError);

			function loadComplete(event){
				// console.log("event is ", event);
				let catFoods = JSON.parse(event.target.responseText);
				catFood.push(catFoods);
				console.log("catFood", catFood);
				callbackToInvoke(catFood);
				// console.log(callbackToInvoke);
			}
			function loadError(event){
				console.log("There was an error loading JSON");
			}

			request.open("GET", "./js/catFood.json");
			request.send();

		}



	};

})();