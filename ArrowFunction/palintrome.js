const reverseString = ((str)=>{
    //return str.split('').reverse().join('');
    let result = "";
    for(let i = str.length-1; i>=0; i--){
        result += str[i];
    }
    return result;
});

let inputstring = ["test", "aba", "happy", "mmm"];
let ouputstring = [];
for(let i =0; i<inputstring.length; i++){
    if(inputstring[i]===reverseString(inputstring[i])){
        ouputstring.push(inputstring[i]);
    }
}
console.log(ouputstring);