// Điều kiện
// if(condition){
// your code    
//}
const isRich = true
const myMoney = 100
if(!isRich){
    console.log('I will buy a new car')
}else if(myMoney > 1000){
    console.log('I will give you some money')
}else{
    // console.log('I poor')
}
//prompt, confirm, alert
// alert('Your website has been hacked')
// const yourName =  prompt('Vui lòng nhập tên của bạn', '')
// console.log(yourName)
// const isYourMoney = confirm('Đây có phải tiền cảu bạn hay ko')
// console.log(isYourMoney)

// 1. Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hớn hoặc bằng 18 thì được xem phim rạp, ngược lại thì ko đc
// const yourAge = prompt('Nhập số tuổi của bạn', '18')
// if(yourAge  == 18){
//     alert('Bạn được xem phim rạp')
// }else{
//     alert('Bạn không được xem phim rạp')
// }

// 2. cho 2 số a và b, tìm ra số lớn hơn
const a = 5
const b = 5

if(a > b){
    alert(`Số lớn hơn là số ${a}`)
}else if(a < b){
    alert(`Số lớn hơn là số ${b}`)
}else{
    alert('Không có số nào lớn hơn số nào')
}

