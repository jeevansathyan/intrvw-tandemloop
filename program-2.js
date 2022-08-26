let inp=require('readline-sync')

let num=Number(inp.question('Enter the input : '));
let output=[]

for(i=1;i<=100;i++){
    if(i%2 != 0){
        output.push(i)
        if(output.length>=num){
            break;
        }
    }
}
console.log(output);