function sum(...nums){
    return nums.reduce((curr,acc) => curr + acc);
}

function product(...nums){
    return nums.reduce((curr,accu)=> accu*curr)
}


module.exports = {sum,product}