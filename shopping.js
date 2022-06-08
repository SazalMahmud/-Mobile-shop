function updateProductNumber(product, price, isIncreasing){
 const ProductInput = document.getElementById(product +'-number');
 let productNumber = ProductInput.value;
 if(isIncreasing == true){
    productNumber = parseInt(productNumber)+1;
 }
 else if(productNumber>0){
    productNumber =parseInt(productNumber)-1;
 }
 ProductInput.value =productNumber;
  //update case total
  const productTotal = document.getElementById( product +'-total');
  productTotal.innerText =productNumber* price;
  calculateTotal();
 
}

function getInputValue(product){
   const productInput=document.getElementById(product +'-number');
   const productNumber =parseInt(productInput.value);
   return productNumber;

}
function calculateTotal(){
  
   const phoneTotal =getInputValue('phone')*1219;
   const caseTotal =getInputValue('case')*59;
   const screenTotal =getInputValue('screen')*20;
   const subTotal = phoneTotal + caseTotal + screenTotal;
   const tax = subTotal/10;
   const totalPrice =subTotal + tax;
   // update subtotal
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText=tax;
   document.getElementById('total-price').innerText =totalPrice;


}

//phn increse-decrease 
document.getElementById('phone-plus').addEventListener('click',function(){
   updateProductNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
   updateProductNumber('phone',1219,false);
});
// case increse-decrease
document.getElementById('case-plus').addEventListener('click',function(){
  updateProductNumber( 'case',59,true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
    

});
// extra
document.getElementById('screen-plus').addEventListener('click',function(){
  
  updateProductNumber( 'screen',20, true);
 });
 document.getElementById('screen-minus').addEventListener('click',function(){
     updateProductNumber('screen', 20 , false);
     
 });