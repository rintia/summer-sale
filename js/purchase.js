let totalPrice = 0 ;
let total = 0;
function clickHandler(target){
   document.getElementById("btn-purchase").disabled = false;
   const product = target.childNodes[3].childNodes[3];
   const productName = product.innerText;
   const newItem = document.createElement('li');
   newItem.innerText = productName;
   const selectedItems = document.getElementById('selected-items');
   selectedItems.appendChild(newItem);
   const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
   totalPrice = parseFloat(price) + parseFloat(totalPrice);
   total = totalPrice;
   document.getElementById('total').innerText = total.toFixed(2);
   document.getElementById('total-price').innerText = totalPrice.toFixed(2);
   if(totalPrice >= 200){
    document.getElementById('btn-apply').disabled = false;
   }
   
}
document.getElementById('btn-apply').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field');
     const couponValue = couponField.value;
     if( couponValue == 'SELL200'){
      const discount = totalPrice * 0.2;
      const discountElement = document.getElementById('discount');
      discountElement.innerText = discount.toFixed(2);
      const total = totalPrice - discount;
      document.getElementById('total').innerText = total.toFixed(2)
     }
     else{
      alert('Not valid coupon code');
     }
})

function goHome(){
   document.getElementById('total-price').innerText = '00.00';
   document.getElementById('discount').innerText = '00.00';
   document.getElementById('total').innerText = '00.00';
   document.getElementById('selected-items').innerText = '';
   document.getElementById('coupon-field').value = '';
   document.getElementById('btn-purchase').disabled = true;
   document.getElementById('btn-apply').disabled = true;
   total = 0;
   totalPrice = 0;
}