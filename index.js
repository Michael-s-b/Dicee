//functions//
function displayResult(p1, p2) {
    if (p1 > p2) {
        return "Player 1 Wins!";
    }
    else if (p1 < p2) {
        return "Player 2 Wins!";
    }
    else {
        return "Draw!";
    }
}

//Main//
function main() {
    let randomNumber1 = Math.ceil(Math.random() * 6); //---------------------------------------------//random number between 1 - 6
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png"); //set the src attribute of the img element based on the randomNumber1 variable
    let randomNumber2 = Math.ceil(Math.random() * 6); //---------------------------------------------//random number between 1 - 6
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png"); //set the src attribute of the img element based on the randomNumber2 variable
    document.querySelector("h1").textContent = displayResult(randomNumber1, randomNumber2); //-------//assign the textContent property of the h1 element based on the returned string of the function displayResult
}

document.querySelector("button").addEventListener("click", main);