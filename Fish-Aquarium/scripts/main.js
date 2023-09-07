/*Note: The imported function is wrapped in curly braces. This is needed for anything 
that is exported from a module that isn't the default export.*/
 import { getFish } from './database.js';

 const allFish = getFish();
 
 for (const singleFish of allFish) {
     console.log(singleFish)
 }


 // Import the FishList function from the correct module
import { FishList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList")


parentHTMLElement.innerHTML = FishList()