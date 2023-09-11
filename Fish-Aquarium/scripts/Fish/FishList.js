// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

import { mostHolyFish } from "./database.js";

import { soldierFish } from "./database.js";

import { nonHolyFish } from "./database.js";

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish__List">'

    // Create HTML representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img class="fish__image" src="${singleFish.image}" /></div>
            <div class="fish__name"><span>Name:</span>${ singleFish.name}</div>
            <div class="fish__species"><span>Species:</span>  ${singleFish.species}</div>
            <div class="fish__length"><span>Length:</span>  ${singleFish.size}</div>
            <div class="fish__harvested"><span>Harvested:</span>  ${singleFish.harvested}</div>
            <div class="fish__diet"><span>Diet:</span>  ${singleFish.food}</div>
          </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}

export const fishHolyList = () => {
    // Invoke the function that you imported from the database module
    const fishes = mostHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish__List">'

    // Create HTML representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${singleFish.image}" /></div>
            <div class="fish__name"><span>Name:</span>${ singleFish.name}</div>
            <div class="fish__species"><span>Species:</span>  ${singleFish.species}</div>
            <div class="fish__length"><span>Length:</span>  ${singleFish.size}</div>
            <div class="fish__harvested"><span>Harvested:</span>  ${singleFish.harvested}</div>
            <div class="fish__diet"><span>Diet:</span>  ${singleFish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const fishSoldierList = () => {
    // Invoke the function that you imported from the database module
    const fishes = soldierFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish__List">'

    // Create HTML representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${singleFish.image}" /></div>
            <div class="fish__name"><span>Name:</span>${ singleFish.name}</div>
            <div class="fish__species"><span>Species:</span>  ${singleFish.species}</div>
            <div class="fish__length"><span>Length:</span>  ${singleFish.size}</div>
            <div class="fish__harvested"><span>Harvested:</span>  ${singleFish.harvested}</div>
            <div class="fish__diet"><span>Diet:</span>  ${singleFish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}



export const fishRegList = () => {
    // Invoke the function that you imported from the database module
    const fishes = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish__List">'

    // Create HTML representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${singleFish.image}" /></div>
            <div class="fish__name"><span>Name:</span>${ singleFish.name}</div>
            <div class="fish__species"><span>Species:</span>  ${singleFish.species}</div>
            <div class="fish__length"><span>Length:</span>  ${singleFish.size}</div>
            <div class="fish__harvested"><span>Harvested:</span>  ${singleFish.harvested}</div>
            <div class="fish__diet"><span>Diet:</span>  ${singleFish.food}</div>
        </section>
`
    }
    htmlString += `</article>`
    return htmlString
    
}