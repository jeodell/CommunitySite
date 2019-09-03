if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready;
}

function ready() {
    const removeButtons = document.querySelectorAll('.cart-quantity-button');
    for(let i = 0; i < removeButtons.length; i++) {
        let button = removeButtons[i];
        button.addEventListener('click', removeItem);
    }

    const quantityInput = document.querySelectorAll('.cart-quantity-input');
    for(let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        input.addEventListener('change', changeQuantity);
    }

    const addToCartButtons = document.querySelectorAll('.shop-button');
    for(let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    const purchaseButton = document.querySelector('.purchase-button');
    purchaseButton.addEventListener('click', purchaseClicked);
}

function removeItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function changeQuantity(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    const buttonClicked = event.target;
    const shopItem = buttonClicked.parentElement.parentElement;
    const title = shopItem.querySelector('.shop-item-title').textContent;
    const price = shopItem.querySelector('.shop-item-price').textContent;
    const image = shopItem.querySelector('.shop-image').src;
    addToCart(title, price, image);
    updateCartTotal();
}

function addToCart(title, price, imageSrc) {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    const cartItems = document.querySelector('.cart');
    const cartItemTitles = cartItems.querySelectorAll('.cart-item-title');
    for(let i = 0; i < cartItemTitles.length; i++) {
        if(cartItemTitles[i].textContent === title) {
            alert('This item has already been added to the cart');
            return;
        }
    }
    /* back ticks used in order to use variables in HTML contents using ${} */
    const cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="cart-quantity-button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', changeQuantity);
    cartRow.querySelector('.cart-quantity-button').addEventListener('click', removeItem);
}

function purchaseClicked() {
    alert('Thank you for your purchase');
    const cartItems = document.querySelector('.cart');
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function updateCartTotal() {
    const cartItemContainer = document.querySelector('.cart');
    const cartRows = cartItemContainer.querySelectorAll('.cart-row');
    let total = 0;
    for(let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.querySelector('.cart-price');
        let quantityElement = cartRow.querySelector('.cart-quantity-input');
        let price = parseFloat(priceElement.textContent.replace('$', ''));
        let quantity = quantityElement.value;
        total += (price * quantity);
    }
    total = total.toFixed(2);
    document.querySelector('.cart-total-price').textContent = '$' + total;
}