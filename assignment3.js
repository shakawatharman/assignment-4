/* -----------------------
    PROBLEM NUMBER 01
----------------------- */

// FUNCTION DECLARATION
function seerToMon(seer){
    //  [Note:User's input can't be a negative number.]
    if (seer > 0){
        let result = (seer / 40);   /* [Note: "KG and Seer have different value.Here 1 Seer=40 KG"] */
        return result;
    }
    else{
        return "Your input is not VALID.";      
    }

}
// FUNCTION CALLING
let userInput = seerToMon(2050);
console.log(userInput);




/* -----------------------
    PROBLEM NUMBER 02
----------------------- */





// FUNCTION DECLARATION
function totalSales(shirtQuantity,pantQuantity,shoeQuantity){

    const shirtPrice= 100;
    const pantPrice= 200;
    const shoePrice= 500;

    //   [Note:User's input can't be a negative number.]
    if (shirtQuantity >= 0 && pantQuantity >=0 && shoeQuantity >=0) {
        let totalShirtSale= shirtPrice * shirtQuantity;
        let totalPantSale=pantPrice * pantQuantity;
        let totalShoeSale=shoePrice * shoeQuantity;

    const totalTaka =totalShirtSale + totalPantSale + totalShoeSale;
    return totalTaka;   
}
    else {
       return "Your input is not VALID.";
    }
   
}

// FUNCTION CALLING
let userInput = totalSales(2,3,1);
console.log(userInput);





/* -----------------------
    PROBLEM NUMBER 03
----------------------- */



// FUNCTION DECLARATION
function totalCharge (shirtQuantity){
    oneHundredShirt = 100;
    twoHundredShirt = 80;
    twoHundredPlusShirt = 50;


//  [Note:User's input can't be a negative number.]
    if (shirtQuantity < 0){
    return "Your input is not VALID.";
}

    else if (shirtQuantity <= 100){
    const  DeliveryCharge= shirtQuantity * oneHundredShirt;
    return DeliveryCharge;
}
    else if (shirtQuantity <= 200){
    const priceOfFirstHundred = 100 * oneHundredShirt;
    const restShirt = shirtQuantity - 100;
    const priceOfSecondHundred = restShirt * twoHundredShirt;
    const DeliveryCharge = priceOfFirstHundred + priceOfSecondHundred;
    return DeliveryCharge;
}
    else if ( shirtQuantity > 200){
    const priceOfFirstHundred = 100 * oneHundredShirt;
    const priceOfSecondHundred = 100 * twoHundredShirt;
    const restShirt = shirtQuantity - 200;
    const  priceOfSecondHundredPlus = restShirt * twoHundredPlusShirt;
    const DeliveryCharge = priceOfFirstHundred + priceOfSecondHundred + priceOfSecondHundredPlus;
    return DeliveryCharge;
}
    else {
    return "INVALID INPUT";
}

}
/* FUNCTION CALLING */
let yourOrder = totalCharge (201);
console.log(yourOrder);




/* -----------------------
    PROBLEM NUMBER 04
----------------------- */

// FUNCTION DECLARATION
function perfectFriend()
