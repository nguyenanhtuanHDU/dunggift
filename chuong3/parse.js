'4.5' // parseFloat('4.5') -> 4.5
'4' // parseInt('4') -> 4
// Number(value): chuyển đổi số dạng String -> Number
console.log(Number('4.5')) // 4.5
console.log(Number('4')) // 4
console.log(Number('abc')) // NaN(ko phải số)
// NaN: Not A Number
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number('')) // 0
console.log(Number(NaN)) // NaN
// falsy value
console.log(Number(true)) // 1


// String(value)
console.log(String(4.5)) // '4.5'
console.log(String(null)) // 'null'
console.log(String(undefined)) // 'undefined'
console.log(String(NaN)) // 'NaN'
console.log(String(false)) // false
console.log(String(true)) // true


// Boolean(value) : true or false
console.log(`Boolean of 0 is: ${Boolean(0)}`) //false
console.log(`Boolean of '' is: ${Boolean()}`) //false 
console.log(`Boolean of null is: ${Boolean(null)}`)//false
console.log(`Boolean of undefined is: ${Boolean(undefined)}`) // false
console.log(`Boolean of NaN is: ${Boolean(NaN)}`)//false
console.log(`Boolean of false is: ${Boolean(false)}`)//false
console.log(`Boolean of test tuan is: ${Boolean('tuan')}`)//true

//Type coercion
// + - * /
// weird 
console.log(1 + 2) // 3
console.log(10 + 10) // 20
console.log(10 + '10') // '1010'
console.log('10' + 10) // '1010'
// 1- -> '10' + '10' = '1010'
//console.log(String('10') + String(10))
console.log('10' - 10) // 0 -> Number('10') - 10 = 0
console.log(null + '') // 'null'
console.log(null + undefined) // NaN
console.log('' - 1) // -1 : Number('') -> 0 - 1 = -1
console.log(false - true) // Number(false) - Number(true) -> 0 - 1 = -1
console.log(null + 10) // Number(null) -> 0 + 10 = 10


// Toán tử so sánh >, <, >=, <=
console.log(2 > 3) // false
console.log(5 > 2) // true
console.log(2 < 3) // false
console.log(2 >= 2) //true
console.log(2 <= 2) //true


// Toán tử logic : &&, ||, !
console.log(5 > 7 && 8 > 3) // false
console.log(5 > 7 || 8 > 3) // true
const amIWrong = false
console.log(!amIWrong) // true


// == , ===
console.log('=== vs ==')
console.log(10 == '10') // String(10) == '10'
console.log(true == 1) // Number(true) = 1
console.log(1 == '01') // Number('01') = 1 -> 1 == 1
console.log(null == '') // string(null) = 'null' != ''
console.log(typeof 10) // -> Number
console.log(typeof '10') // -> string
console.log(10 === '10') // -> false
console.log(10 !== '10') // true
//!==





