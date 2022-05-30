document.querySelector("#order-form").addEventListener("submit",confirmed);

function confirmed(){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let number=document.querySelector("#number").value;
    let address=document.querySelector("#address").value;
    if(name!=""&& number==123456 && address=="masaischool")
   { 
       alert("Your order is accepted  ")
   } 
    else{
        alert("not accepted");
    }
};

setTimeout(function(){
    alert(" Your order is being Prepared ")
},3000)
setTimeout(function(){
    alert(" Your order is being packed   ")
},8000)
setTimeout(function(){
    alert("Your order is out for delivery ")
},10000)
setTimeout(function(){
    alert("Order delivered ")
},12000)