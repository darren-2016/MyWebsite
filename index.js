/**
 * My Website
 * Darren J. Draper
 * September 2023
 */

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = async function () {
    document.getElementById("testMessage").innerHTML = "Test message";
    let quoteMessage = document.getElementById("quoteMessage");
    
    let response = await fetch("https://type.fit/api/quotes");

    if (!response.ok) {
        quoteMessage.innerHTML = "Problem reading quote API";
    } else {
        let type = response.headers.get("content-type");
        if (type === "application/json") {
            let json = await response.json();
            let index = randomInteger(0, 15);
            quoteMessage.innerHTML = json[index].text;
        } else {
            quoteMessage.innerHTML = "No JSON received from API"
        }
    }
}
