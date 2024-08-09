const API = "https://foodish-api.com/api/";

const foodContainer = document.getElementById("food-data");

async function getAllFood() {

    try {
        const res = await fetch(API, {
            method: "GET",
        });
        const data = await res.json();
        appendNewFood(data);
    } catch (error) {
        console.log(error);
    }
}

getAllFood();

function appendNewFood(food){
    const mainDiv = document.createElement("div");
    mainDiv.className = "card";
    mainDiv.innerHTML +=`
    <p><span>Random Food image </span></p>
    <p><span>URL : ${food.image}</span></p>
    <img src=${food.image} alt="image" width="600" height="400">
    `;
   foodContainer.append(mainDiv);
};