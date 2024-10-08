let total=document.getElementById('total')
let amount =0

function take(){
amount=amount-1
total.innerHTML=amount
}
function add(){
amount=amount+1
total.innerHTML=amount
}