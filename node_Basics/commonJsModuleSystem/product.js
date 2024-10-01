function product(...nums){
    return nums.reduce((curr,accu)=> accu*curr)
}

module.exports = product;