//  Problem solving-3 start ( Delivery Cost)


function deliveryCost(quantity){

    const firstHundredSinglequantityCost =100;
    const oneHundredMoreSinglequantityCost =80;
    const twoHundredMaxSinglequantityCost = 50;

    if (typeof quantity != 'number') {
        return "Please enter a number!";
    } 
    
    else if (quantity <= 0) {
        return "Please enter positive number!";

    }    

    // First 1 to 100 quantity cost.

    else if (quantity <= 100) {
       const firstHundredquantityTotalCost =quantity * firstHundredSinglequantityCost;
       return firstHundredquantityTotalCost;
    }
    // First 1 to 100 quantity cost and 101 to 200 quantity cost.

    else if (quantity <=200 ) {
       const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
       const onehundredMoreQunatity = quantity - 100;
       const onehundredMoreQunatityCost = onehundredMoreQunatity * oneHundredMoreSinglequantityCost;
       const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost;
       return totalCost;
    }

    // First 1 to 100 quantity  , 101 to 200 quantity and 201 more quantity cost.

    else {
        const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
        const onehundredMoreQunatityCost = 100 * oneHundredMoreSinglequantityCost ;
        const twoHundredMaxquantity = quantity - 200;
        const twoHundredMaxquantityCost = twoHundredMaxquantity * twoHundredMaxSinglequantityCost ;
        const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost + twoHundredMaxquantityCost ;
        return totalCost;


    }
}

console.log(deliveryCost(301));

        // Problem solving-3 end
