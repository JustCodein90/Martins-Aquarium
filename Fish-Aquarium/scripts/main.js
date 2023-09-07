/*Note: The imported function is wrapped in curly braces. This is needed for anything that is exported from a 
 module that isn't the default export.*/
 import { getFish } from './database.js'

 const allFish = getFish()
 
 for (const singleFish of allFish) {
     console.log(singleFish)
 }