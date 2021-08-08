// Problem solving-1 start (seer to mon)

function seerToMon(number) {

    const oneMon = 40;
        
    if (typeof number != 'number') {
        return "Please enter a number!";
    } 
    
    else if (number <= 0) {
        return "Must input positive number!";

    }
    else{

        // formula
        let convert = number / oneMon;
        return convert;
       
    } 

}

console.log(seerToMon(80));

        // Problem solving-1 end


// Problem solving-2 start (Total sales)


function totalSales(shirtQuantity , pantsQuantity , shoesQuantity ) {
    const shirtPrice = 100;
    const pantsPrice = 200;
    const shoesPrice = 500;

    // formula
    const totalPriceOfShirt = shirtPrice * shirtQuantity;
    const totalPriceOfPants = pantsPrice * pantsQuantity;
    const totalPriceOfShoes = shoesPrice * shoesQuantity;

    const totalSalesOfDaily =totalPriceOfShirt + totalPriceOfPants + totalPriceOfShoes ;
    return totalSalesOfDaily;

} 

console.log(totalSales(2,2,2));

     // Problem solving-2 end


// Problem solving-3 start ( Delivery Cost)


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

console.log(deliveryCost(100));

        // Problem solving-3 end



 // Problem solving-4 start (Perfect friend)


function perfectFriend(friendName){

    let largest = friendName[0];
    for(let i = 0; i < friendName.length; i++){
        if(friendName[i].length > largest.length){ 
            largest = friendName[i]; 
        } 
    }

    return largest; 

}

console.log(perfectFriend(["sabbir", "nahid", "rakib", "promi", "tasfiya", "hasan", "rony"]));


    // Problem solving-4 end 