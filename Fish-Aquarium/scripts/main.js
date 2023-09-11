/*Note: The iFish\FishList.jsmported function is wrapped in curly braces. This is needed for anything 
that is exported from a module that isn't the default export.*/
import { getFish } from './Fish/database.js';
    const allFish = getFish();
 
    for (const singleFish of allFish) {
        console.log(singleFish)
    }



 // Import the FishList function from the correct module
 import { FishList } from './Fish/FishList.js'; 

    /*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
    */
    const parentHTMLElement = document.querySelector(".allFish")
    parentHTMLElement.innerHTML = FishList()




 import { fishHolyList } from './Fish/FishList.js';  
    const parentHTMLElement = document.querySelector(".fishHoly")
        parentHTMLElement.innerHTML = fishHolyList()




 import { fishSoldierList } from './Fish/FishList.js'  
    const parentHTMLElement = document.querySelector(".fishSoldier")
        parentHTMLElement.innerHTML = fishSoldierList()




 import { fishRegList } from './Fish/FishList.js'  
    const parentHTMLElement = document.querySelector(".fishRegular")
        parentHTMLElement.innerHTML = fishRegList()


