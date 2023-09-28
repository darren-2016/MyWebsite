let keepsHisWord;
keepsHisWord = true;
let promise1 = new Promise(function(resolve, reject) {
                             if (keepsHisWord) {
                                resolve("He likes to keep his word"); 
                            } else { 
                                reject("He doesn't want to keep his word");
                            }
                        });
console.log(promise1);

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({message:"He likes to keep his word", code:"aManKeepsHisWord"});
    },
    10 * 1000);});
console.log(promise2);

keepsHisWord = false;
let promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({message:"He likes to keep his word", code:"aManKeepsHisWord"});
    },
    10 * 1000);});
console.log(promise2);
