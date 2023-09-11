/*Note: The iFish\FishList.jsmported function is wrapped in curly braces. This is needed for anything 
that is exported from a module that isn't the default export.*/
import { getFish } from './Fish/database.js';
    const allFish = getFish();
 
    for (const singleFish of allFish) {
        console.log(singleFish)
    }

import { getTips} from "./Tips/dataTips.js"
    const allTips = getTips()

    for(const singleTip of allTips) {
        console.log(singleTip)
    }

import { getLocation } from "./Location/locationData.js";
    const allLocations = getLocation()

    for (const singleLocation of allLocations)
        console.log(singleLocation)



 // Import the FishList function from the correct module
 import { FishList } from './Fish/FishList.js'; 
  
 
    //What is the CSS selector for the element where you
    // want to display the fish?

    //Use . for elements with a "class" attribute
    //Use # for elements with an "id" attribute
    
    const parentHTMLElement = document.querySelector(".allFish")
    parentHTMLElement.innerHTML = FishList()




 import { fishHolyList } from './Fish/FishList.js';  
    const parentHTMLElementHoly = document.querySelector(".fishHoly")
        parentHTMLElementHoly.innerHTML = fishHolyList()




 import { fishSoldierList } from './Fish/FishList.js'  
    const parentHTMLElementSoldier = document.querySelector(".fishSoldier")
        parentHTMLElementSoldier.innerHTML = fishSoldierList()




 import { fishRegList } from './Fish/FishList.js'  
    const parentHTMLElementReg = document.querySelector(".fishRegular")
        parentHTMLElementReg.innerHTML = fishRegList()



// Start of Tipslist

import{tipsListFunction} from "./Tips/tipsList.js";
    const parentHTMLElementTips = document.querySelector(".tips")
        parentHTMLElementTips.innerHTML = tipsListFunction()



import {locationListFunction } from "./Location/locationList.js";
    const parentHTMLElementLocation = document.querySelector(".allLocations")
        parentHTMLElementLocation.innerHTML = locationListFunction()