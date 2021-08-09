/* -----------------------
    PROBLEM NUMBER 01
----------------------- */

// FUNCTION DECLARATION
function seerToMon(seer) {
    //  [Note:User's input can't be a negative number.]
    if (seer > 0) {
        let result = (seer / 40); /* [Note: "KG and Seer have different value.Here 1 Seer=40 KG"] */
        return result;
    } else {
        return "Sorry. Your input is not VALID.";
    }

}
// FUNCTION CALLING
let userInput = seerToMon(seer);
console.log(userInput);


/* -----------------------
    PROBLEM NUMBER 02
----------------------- */

// FUNCTION DECLARATION
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    //   [Note:User's input can't be a negative number.]
    if (shirtQuantity >= 0 && pantQuantity >= 0 && shoeQuantity >= 0) {
        let totalShirtSale = shirtPrice * shirtQuantity;
        let totalPantSale = pantPrice * pantQuantity;
        let totalShoeSale = shoePrice * shoeQuantity;

        const totalTaka = totalShirtSale + totalPantSale + totalShoeSale;
        return totalTaka;
    } else {
        return "Sorry. Your input is not VALID.";
    }

}

// FUNCTION CALLING
let userInput = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(userInput);

/* -----------------------
    PROBLEM NUMBER 03
----------------------- */

// FUNCTION DECLARATION
function totalCharge(shirtQuantity) {
    const chargeForFirst100 = 100;
    const chargeForSecond100 = 80;
    const chargeFor200Plus = 50;


    //  [Note:User's input can't be a negative number.]
    if (shirtQuantity < 0) {
        return "Sorry. Your input is not VALID.";
    } else if (shirtQuantity <= 100) {
        const DeliveryCharge = shirtQuantity * chargeForFirst100;
        return DeliveryCharge;
    } else if (shirtQuantity <= 200) {
        const priceOfFirstHundred = 100 * chargeForFirst100;
        const restShirt = shirtQuantity - 100;
        const priceOfSecondHundred = restShirt * chargeForSecond100;
        const DeliveryCharge = priceOfFirstHundred + priceOfSecondHundred;
        return DeliveryCharge;
    } else if (shirtQuantity > 200) {
        const priceOfFirstHundred = 100 * chargeForFirst100;
        const priceOfSecondHundred = 100 * chargeForSecond100;
        const restShirt = shirtQuantity - 200;
        const priceOfSecondHundredPlus = restShirt * chargeFor200Plus;
        const DeliveryCharge = priceOfFirstHundred + priceOfSecondHundred + priceOfSecondHundredPlus;
        return DeliveryCharge;
    } else {
        return "Sorry. Your input is not VALID.";
    }

}
// FUNCTION CALLING
let yourOrder = totalCharge(shirtQuantity);
console.log(yourOrder);

/* -----------------------
    PROBLEM NUMBER 04
----------------------- */

// FUNCTION DECLARATION

function perfectFriend(friendsName) {
    for (i = 0; i < friendsName.length; i++) {
        if (typeof friendsName[i] != String) {
            return "Your input is not VALID"
        } else if (friendsName[i].length == 5) {
            return friendsName[i];
        }
    }
}

let friendsName = ["Abir", "Asma", "Asif", "Sajib", "Rakib", "Manik", "Yasin", "Shakawat", "Sayeed"];


// FUNCTION CALLING
let largestName = perfectFriend(friendsName);
console.log(largestName);