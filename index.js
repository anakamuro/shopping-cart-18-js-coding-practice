let removeBtn = document.getElementsByClassName('btn-danger');
// for(i=0; i < removeBtn.length; i++){
//     removeBtn[i].addEventListener('click', removeBtns)
// }

function removeBtns(event){
    let e = event.target;
    let parents = e.parentElement.parentElement.remove()
    grandtotal();
}

let addToCart = document.getElementsByClassName('btn-primary');
for(i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener('click', addToCarts)
}

function addToCarts(event){
    let addToCart = event.target;
    let addToCartEl = addToCart.parentElement;
    //console.log(addToCartEl)
    let imgName = addToCartEl.children[0].src;
    let titleName = addToCartEl.children[1].innerText;
    let price = addToCartEl.children[2].innerText;
    //console.log(imgName, titleName, price)
    addToCartUpdate(imgName, titleName, price);
    grandtotal();
}

let tbody = document.getElementsByTagName('tbody')[0];

function addToCartUpdate(imgName, titleName, price){
   let createElement = document.createElement('tr');
   let titleNames = document.getElementsByClassName('item-title');
   for(i=0; i< titleNames.length; i++){
    if(titleNames[i].innerText == titleName){
        alert('this item already added to your cart')
        return;
    }
   }
   createElement.innerHTML = `
   <td><img src="${imgName}" class="item-img" alt=""></td>
   <td><h4 class="item-title">${titleName}</h4></td>
   <td><h4 class="item-price">${price}</h4></td>
   <td><input type="number" class="item-qty" value="0"></td>
   <td><h4 class="sub-total">$ 0</h4></td>
   <td><button class="btn btn-danger">Remove</button></td>
   `
   tbody.append(createElement);
   for(i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeBtns)
}
   for(i = 0; i <  qtyUpdate.length; i++){
    qtyUpdate[i].addEventListener('click', updateQty)
}
grandtotal();
}

let qtyUpdate = document.getElementsByClassName('item-qty');


function updateQty(event){
    let updateEl = event.target;
    let parentsEl = updateEl.parentElement.parentElement;
    console.log(parentsEl)
    let itemPrice = parentsEl.getElementsByClassName('item-price')[0];
    let itemPrices = itemPrice.innerText.replace('$', ' ')
    let subtotal = parentsEl.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = "$ " + updateEl.value * itemPrices;
    if(isNaN(updateEl.value) || updateEl.value <= 0){
        updateEl.value = 1;
    }
    grandtotal()
}

function grandtotal(){
    let total = 0;
    let grands = document.querySelector('h4.grand-total');
    let updates = document.getElementsByClassName('sub-total');
    for(i=0; i < updates.length; i++){
        let updatesAmount = parseInt(updates[i].innerText.replace('$', ' '));
        total += updatesAmount;
        console.log(updatesAmount)
    }
    grands.innerHTML = "$ " + total;
    console.log(grands.innerHTML)
    console.log(total)
}
