let coinFlip;
let randomNum;

do{
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
}while(coinFlip===1)