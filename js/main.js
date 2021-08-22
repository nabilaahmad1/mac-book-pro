// update product price field 
function updatePriceField(inputId, price) {
    document.getElementById(inputId).innerText = price;
}

// global variable for promo code apply 
const promoCode = "stevekaku";
const discount = 20;
let isPromoApply = false;

// update total price cost 
function updateTotalPrice() {
    const bestPrice = parseInt(document.getElementById("best-price").innerText);
    const memoryPrice = parseInt(document.getElementById("memory-price").innerText);
    const storagePrice = parseInt(document.getElementById("storage-price").innerText);
    const shippingPrice = parseInt(document.getElementById("shipping-price").innerText);

    // total calculation 
    const totalPrice = bestPrice + memoryPrice + storagePrice + shippingPrice;
    let promoUpdatePrice = totalPrice;

    // promo code varification 
    if (isPromoApply) {
        promoUpdatePrice *= (100 - discount) / 100;
    }

    updatePriceField("price-total", totalPrice);
    updatePriceField("promo-price", promoUpdatePrice);
}

// memory price update 
document.getElementById("memory-part").addEventListener("click", function (event) {
    const memoryfor8 = document.getElementById("memory-8gb");
    const memoryfor16 = document.getElementById("memory-16gb");
    const memoryCost = document.getElementById("memory-price");

    switch (event.target) {
        //8gb memory
        case memoryfor8:
            updatePriceField('memory-price', 0);
            break;
        //16gb memory
        case memoryfor16:
            updatePriceField('memory-price', 180);
            break;
    }
    updateTotalPrice();
});

// storage price update 
document.getElementById("storage-part").addEventListener("click", function (event) {
    const storagefor256 = document.getElementById("storage-256gb");
    const storagefor512 = document.getElementById("storage-512gb");
    const storagefor1 = document.getElementById("storage-1tb");
    const storageCost = document.getElementById("storage-price");

    switch (event.target) {
        //256gb storage
        case storagefor256:
            updatePriceField('storage-price', 0);
            break;
        // 512gb storage
        case storagefor512:
            updatePriceField('storage-price', 100);
            break;
        // 1tb storage 
        case storagefor1:
            updatePriceField("storage-price", 180);
            break;
    }
    updateTotalPrice();
});

// shipping price update 
document.getElementById("shipping-part").addEventListener("click", function (event) {
    const shippingforFree = document.getElementById("free-delivary");
    const shippingforCharged = document.getElementById("charged-delivary");
    const shippingCost = document.getElementById("shipping-price");

    switch (event.target) {
        //free shipping
        case shippingforFree:
            updatePriceField('shipping-price', 0);
            break;
        //charged shipping
        case shippingforCharged:
            updatePriceField('shipping-price', 20);
            break;
    }
    updateTotalPrice();
});

// promo code appky 
document.getElementById("submit").addEventListener("click", function () {
    const inputPromoCode = document.getElementById("type-code");
    const inputCode = inputPromoCode.value;
    inputPromoCode.value = "";
    if (promoCode == inputCode) {
        isPromoApply = true;
    }
    updateTotalPrice();
});