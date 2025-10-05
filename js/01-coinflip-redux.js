let coinFlip;
let randomNum;

let nCount = parseInt(prompt("How many times do you want to loop? "));

for(let i=0; i<nCount; i++){
    randomNum = Math.round(Math.random());

    if(randomNum<0.5){
        coinFlip = 0;
    }
    else{
        coinFlip = 1;
    }
    
    if(coinFlip===0){
        console.log("Heads");
    }
    if(coinFlip===1){
        console.log("Tails");
    }
}