// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 3;
let N = parseInt(input);
let answer = [];
for(let i=1; i<(2*N); i++){
    let star = "";
    if(i<=N){
        for(let j=0; j<i; j++){
            star += "*"
        }
    }else if(i>N){
        for(let j=i; j<2*N; j++){
            star += "*"
        }
    }    
    answer.push(star)
}
console.log(answer.join('\n'));