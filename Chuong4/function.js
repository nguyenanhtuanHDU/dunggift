// function (hàm)
// Khai báo function
// Cú pháp (Syntax) : function functionName(parameters){
// Your code here
// }

// Đề bài: Viết ham tính tổng 2 số a và b
function sum(a = 0, b = 0){
    return a + b
}
// Tên function () : invoke function
// console.log(sum(5, 98)) 


// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0){
    console.log(a + b)
    return a + b  
}
const sum2 = add // gán cho biến function add cho biến sum2 chưa đc gọi


// Tham số là function
// tính tb của a và b
// fn: fuction
function average(a, b, fn){
    const total = fn(a, b)
    return total / 2
}
let result = average(200, 300, sum2)
console.log(`result: ${result}`)

// Anonymous fuction
// ko bị hoisting
const logName = function(){
    console.log('Your name')
};
// logName()
// phải gọi function ở dưới, vì loại function này ko tự động đưa function lên trên đầu
// IIFE -> immreduately invoked fuction execution: viết xong fuction thì function đc chạy ngay lập tức
(function(){
    console.log('This is IIFE function')
})();


// Scope
// Global scope, function scope
let myName = 'Anh Tuan' // Global scope: nằm ngoài function
function logYourName(){
    let myName2 = myName // Function scope: nằm trong function
    console.log(myName2)
}
logYourName();

var message3
if(2 > 1){
    // Block scope
    let message = 'hello world'
    const message2 = 'aaaaa' 
    // global scope
    // hoisting
    message3 = 'Hello Tuan'
};
// alert(message3) // message3 vẫn chạy do var bị hoisting(bị đưa lên đầu)


// Lexical scope
let aNewName = 'Nguyen Anh Tuan';// global scope
function sayHello(){
    let message4 = 'Hi' //block scope
    console.log(`${message4} ${aNewName}`);
}
// sayHello()

// Closure
// Function con có thể truy xuất scope của function cha
// function sayHello2(){ // parent function
//     let message = 'Hi';
//     function sayHi(){ // inner function
//         console.log(message)
//     }
//     return sayHi;
// }
// let hello = sayHello2();
// hello()
alert('Thanks kiu for món quà')
alert('Bánh ngon lắm chị Dung ak')
alert(':3333')
alert('E yêu chị Lê Thị Dung')
alert('Lắm lun ^ ^')







