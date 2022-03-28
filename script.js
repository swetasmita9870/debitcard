
function myfunc(){
    let cardnumber,cardholdername,expiry,cvv;
cardnumber = document.querySelector('#cardnumber').value;
cardholdername = document.getElementById("card_holder").value;
expiry = document.getElementById("cardexpiry").value;
cvv = document.getElementById("cvv").value;
const userMonth = +expiry.slice(0,2);
const userYear = +expiry.slice(3,5);
const currentMonth= new Date().getMonth()+1;
const currentYear= +new Date().getFullYear().toString().slice(2,4)
if(userMonth>=12 || userYear<currentYear){
    return alert("invalid details")
  }
localStorage.setItem("cardnumber",cardnumber)
localStorage.setItem("cardholdername",cardholdername)
localStorage.setItem("expiry",expiry)
localStorage.setItem("cvv",cvv)
window.location.href='show.html'

}

document.getElementById('number').innerHTML=localStorage.getItem("cardnumber").split(' ').join('')
document.getElementById('c_name').innerHTML=localStorage.getItem("cardholdername")
document.getElementById('exp_date').innerHTML=localStorage.getItem("expiry").split('/').join(' ')
