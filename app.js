document.addEventListener("DOMContentLoaded", () => {
    
    const productConfig = {
      basePrice: 89.99,
      addonPrices: {
        "None": 0,
        "Solar Panel +$25.00": 25,
        "Premium Lock +$15.00": 15
      },
      taxRate: 0.13
    };
  
    
    const quantityDisplay = document.getElementById("quantity-display");
    const decreaseBtn = document.getElementById("decrease-btn");
    const increaseBtn = document.getElementById("increase-btn");
    const addonSelect = document.getElementById("addon-select");
    const orderSummary = document.getElementById("order-summary");
  
    
    const baseCostElement = document.getElementById("base-cost");
    const addonCostElement = document.getElementById("addon-cost");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");
  
    
    let currentQuantity = 1;
    let isSummaryVisible = false;
  
    
    const displayOrderSummary = () => {
      if (!isSummaryVisible) {
        orderSummary.classList.remove("hidden");
        isSummaryVisible = true;
      }
    };
  
    
    const updateOrderSummary = () => {
      const selectedAddon = addonSelect.value;
      const addonPrice = productConfig.addonPrices[selectedAddon];
      const baseCost = productConfig.basePrice * currentQuantity;
      const subtotal = baseCost + addonPrice;
      const tax = subtotal * productConfig.taxRate;
      const total = subtotal + tax;
  
      
      quantityDisplay.textContent = currentQuantity;
      baseCostElement.textContent = `Base Cost: $${baseCost.toFixed(2)} (${currentQuantity} × $${productConfig.basePrice.toFixed(2)})`;
      addonCostElement.textContent = `Upgrade Cost: $${addonPrice.toFixed(2)}`;
      subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
      taxElement.textContent = `Tax (13%): $${tax.toFixed(2)}`;
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    };
  
    
    decreaseBtn.addEventListener("click", () => {
      if (currentQuantity > 1) {
        currentQuantity--;
        updateOrderSummary();
        displayOrderSummary();
      }
    });
  
    increaseBtn.addEventListener("click", () => {
      currentQuantity++;
      updateOrderSummary();
      displayOrderSummary();
    });
  
    addonSelect.addEventListener("change", () => {
      updateOrderSummary();
      displayOrderSummary();
    });
  
    
    updateOrderSummary();
  });
