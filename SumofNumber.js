const sumofnum = function(arr){
    let total=0;
    for (let i=0 ;i< arr.length;i++){
        if(typeof arr[i]==='number'){
            total+=arr[i];
        }
    }
    return total;
}
console.log(sumofnum([1,2,'a',3]));