let nCount = 100;

for(let i=1; i<nCount+1; i++){
    
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} Marco! Polo!`);
    }
    else if(i % 3 === 0){
        console.log(`${i} Marco!`);
    }
    else if(i % 5 === 0){
        console.log(`${i} Polo!`);
    }
    else {
        ;
    }
    
}