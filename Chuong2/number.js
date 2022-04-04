console.log(5 + 7)
console.log(typeof 10)

const number1 = '5'
const number2 = '4.8'
//parseInt : chuyển đổi từ số nguyên dạng String -> number
console.log(parseInt(number1)) // 5
//parseInt : chuyển dổi số thập phân dạng String -> number
console.log(parseFloat(number2)) // 4.8

const number3 = -10
// Math.abs(value) : giá trị tuyệt đối
console.log(Math.abs(number3)) // 10
// Math.floor(value) : làm tròn xuống( ví dụ 4.3 thành 4)
console.log(Math.floor(4.3)) // 4
// Math.ceil(value) : làm tròn lên( ví dụ 4.3 thành 5)
console.log(Math.ceil(4.3)) // 5
// Math.round(value) : làm tròn gần nhất
console.log(Math.round(4.3)) // 4 ( 4.5 trở lên  -> 5, dưới 4.5 -> 4)
console.log(parseFloat((1 / 3).toFixed(2))) // 0.33
// toFixed(number) vd: 0.33333333 -> 0.33 
// tpFixed(2)
// Math.random : random ra 1 số từ 0 đến 1
console.log(Math.ceil(Math.random() * 10))
// Math.max(1, 2, -4, 100) -> trả về số lớn nhất
console.log(`Max: ${Math.max(1,2,3,-4,100)}`) // 100
// Math.min(1, 2, -4, 100) -> trả về số nhỏ nhất
console.log(`Min: ${Math.min(1,2,3,-4,100)}`) // -4
// Math.pow(number1, number2) -> number1 ^ number2
console.log(Math.pow(2, 4)) // 2^4 = 16

console.log(`___Phần bài tập____`)
const myNumber1 = '2'
const myNumber2 = '4.7'
const myNumber3 = 3 / 7
const myNumber4 = -5

console.log(parseInt(myNumber1)) // 2(variable: number)
console.log(parseFloat(myNumber2)) // 4.7(variable: number)
console.log(myNumber3.toFixed(2)) // 0.42
console.log(Math.floor(myNumber2)) // 4
console.log(Math.ceil(myNumber2)) // 5
console.log(Math.round(myNumber2)) // 5
console.log(Math.random()) // random ra 1 số từ 0 đến 1
console.log(Math.abs(myNumber4)) // 5
console.log(Math.pow(2, 3)) // 2^3 = 8
console.log(Math.max(1, 3, 22, -2)) // 22
console.log(Math.min(1, 3, 22, -2)) // -2


//isNaN(value) vs Number.isNaN(value): trả về boolean
// NaN -> Not a Number
console.log(isNaN('This is String'))// true
console.log(isNaN('123'))// ->isNaN(123) -> false
// Number.isNaN
console.log(Number.isNaN('This is String')) //false
console.log(Number.isNaN('1324'))// false
console.log(Number.isNaN(NaN)) //true


