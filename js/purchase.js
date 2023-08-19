let totalPrice = 0 ;
function clickHandler(target){
    document.getElementById("btn-purchase").disabled = false;
   const product = target.childNodes[3].childNodes[3];
   const productName = product.innerText;
   console.log(productName);
   const newItem = document.createElement('li');
   newItem.innerText = productName;
   const selectedItems = document.getElementById('selected-items');
   selectedItems.appendChild(newItem);
   const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
   totalPrice = parseFloat(price) + parseFloat(totalPrice);
   document.getElementById('total-price').innerText = totalPrice.toFixed(2);
   if(totalPrice >= 200){
    document.getElementById('btn-apply').disabled = false;
   }
   
}
document.getElementById('btn-apply').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field');
    console.log('happy')
     const couponValue = couponField.value;
     if( couponValue == 'SELL200'){
      const discount = totalPrice * 0.2;
      const discountElement = document.getElementById('discount');
      discountElement.innerText = discount.toFixed(2);
      const total = totalPrice - discount;
      document.getElementById('total').innerText = total.toFixed(2)
     }
})

function goHome(){
   location.reload();
}