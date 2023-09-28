/**
 * My Website
 * Darren J. Draper
 * September 2023
 */

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function buttonClicked() {
    console.log("button clicked");
}

window.onload = async function () {
    let testMessage = document.getElementById("testMessage");
    let buttonClickHere = document.getElementById("buttonClickHere");
    
    testMessage.innerHTML = "Test message";
    
    buttonClickHere.addEventListener("click", buttonClicked);

    let quoteMessage = document.getElementById("quoteMessage");
    
    let response = await fetch("https://type.fit/api/quotes");

    if (!response.ok) {
        quoteMessage.innerHTML = "Problem reading quote API";
    } else {
        let type = response.headers.get("content-type");
        if(type === "text/plain; charset=UTF-8") { // if (type === "application/json") {
            let json = await response.json();
            let index = randomInteger(0, 15);
            quoteMessage.innerHTML = json[index].text;
        } else {
            quoteMessage.innerHTML = "No JSON received from API"
        }
    }
}

