// const fs = require('fs');

// const text = fs.readFileSync("Content 0\\basics of node\\text.txt")
// console.log(text.toString());

// question 1 -->> x = 32243  ---> o/t 34223

// let x = 32243;
// let y = x.toString()
// var t = y.split('').reverse().join('');
// console.log(t);

//  question 2 --->> 'webmaster' --->> 'abeemrstw'

// var x = 'webmaster';
// var y = x.split('').sort().join('');
// console.log(y);

// question 3 --->> find vowels in string

// var x = 'The quick brown fox a ';
// var vowel = 'aeiouAEIOU';
// var vcount = 0;
// for(var i=0;i<x.length;i++){
//     if(vowel.indexOf(x[i]) !== -1) vcount++;
// }
// console.log(vcount);

// question 4 --->> Write a JavaScript function that accepts a string as a parameter   and converts the first letter of each word of the string in upper case.

// var x = 'The quick brown fox a ';
// var ans = x.split(' ');
// var newArr=[];
// for(let i=0;i<ans.length;i++){
//     newArr.push(ans[i].charAt(0).toUpperCase()+ans[i].slice(1))
// }

// console.log(newArr.join(' '));

// question 5 --->> Write a JavaScript program to get the current date. 

// var today = new Date();
// console.log(today.getDate(),"",today.getMonth(),"",today.getFullYear())

// question 6 -->> Write a JavaScript program to calculate number of days left until next Christmas.

//     today=new Date();   
//     var cmas=new Date(today.getFullYear(), 11, 25);   
//     if (today.getMonth()==11 && today.getDate()>25)    
//     {   
//     cmas.setFullYear(cmas.getFullYear()+1);    
//     }     
//     var one_day=1000*60*60*24;   
//     console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+   
//     " days left until Christmas!"); 

// question 7 -->> 

// to creATE A text file using nodejs
var a = require("fs").writeFileSync('c:\\Users\\akash\\OneDrive\\Desktop\\Node\\Content 0\\basics of node\\text.txt','hello! node ia am ');
// console.log(a)  // o/t undefind

// to read a text file
// console.log(require('fs').readFileSync('Content 0\\basics of node\\text.txt').toString())

// to delete permanently even delete from recycleBin also

// require('fs').unlinkSync('Content 0\\basics of node\\text.txt');

// rename the file 

// require('fs').renameSync('Content 0\\basics of node\\text.txt', 'Content 0\\basics of node\\node.txt')

// to start any application using node

require('child_process').exec('start chrome')