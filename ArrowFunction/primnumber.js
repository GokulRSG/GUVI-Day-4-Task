const primeNumber = ((number)=>{
    if (number < 2) {
        return false;
    }
    for (let i = 2; i<number/2; i++)
    {
        if (number % i === 0) {
            return false
        }
        return true;
    }
});
let num = [2,3,4,5,6,7,8];
let primenumbers = [];
for (let i=0;i<num.length;i++){
    if(primeNumber(num[i]))
    {
        primenumbers.push(num[i]);
    }
}
console.log(primenumbers);