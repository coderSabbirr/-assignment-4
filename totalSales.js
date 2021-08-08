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