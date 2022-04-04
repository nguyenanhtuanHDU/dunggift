const city = 'Thanh Hoa'

console.log(city.split(' '))  //Array['Thanh', 'Hoa']
console.log(city.toLowerCase()) //thanh hoa
console.log(city.toUpperCase()) //Thanh Hoa
console.log(city.startsWith('T')) //true
console.log(city.startsWith('h')) //false
console.log(city.endsWith('a')) //true
console.log(city.endsWith('h')) //false
console.log(city.includes('a')) //true
console.log(city.includes('e')) //false
console.log(city.indexOf('n')) //3
console.log(city.replace('Hoa', 'Binh')) //Thanh Binh
console.log(city.repeat(2)) //Thanh HoaThanh Hoa
console.log(city.slice(2, 5)) //anh
console.log(city.substr(4, 7)) //h Hoa
console.log(city.substring(4, 7)) //h H

const country = '  Viet Nam '
console.log(country.trim()) // Viet Nam
console.log(country.trimEnd()) //   Viet Nam
console.log(country.trimStart()) //Viet Nam
console.log(city.charAt(2)) //a

const myStr = '    Frontend Developer D    '

console.log(`Result of myStr: ${myStr.trim().toUpperCase().replace('DEVELOPER D', 'Developer and Designer').toUpperCase().repeat(2)}`)