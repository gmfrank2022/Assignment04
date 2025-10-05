let nCount = 7; /* parseInt(prompt("How many lines for the triangle? ")); */
let strLine;

for(let i=0; i<nCount; i++){
    strLine="";
    for(let j=0; j<i+1; j++){
        strLine += "#"
    }
    console.log(strLine);
}