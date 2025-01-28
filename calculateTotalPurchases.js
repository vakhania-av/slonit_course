// Задание № 7 - "Легкая тренировка в именовании"

function calculateTotalPurchases(purchaseAmounts) {
  let totalAmount = 0;

  purchaseAmounts.forEach(amount => totalAmount += amount);

  return totalAmount;
}

let topThreeBuyers = [10000, 20000, 30000];

console.log(calculateTotalPurchases(topThreeBuyers));