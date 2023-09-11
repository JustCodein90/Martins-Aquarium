/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
         {
            image: "https://images.squarespace-cdn.com/content/v1/583b4d62d2b857c44d4d4c90/1514496524333-Y7URQCXN8O2V16ZFBW1B/Clown_Triggerfish.jpg",
            name: " Bart",
            food: " Crustaceans",
            size: 10,
            species: " Clown Triggerfish",
            harvested: " 2015"
        },
        {
            image: "https://tropical-fish-keeping.com/wp-content/uploads/2018/05/Red-Cherry-shrimp-Neocaridina-heteropoda2.jpg",
            name: " Tim (Red Cherry Shrimp)",
            food: " Algae",
            size:  2,           
            species: " Crustaceans",
            harvested: " 2017"
        },
        {
            image: "https://images.surferseo.art/821fd378-4024-4723-b156-c842a200e585.jpeg",
            name: " Bob",
            food: " Fish",
            size: 12,
            species: " Red Belly Piranha",
            harvested: " 2019"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Whitespotted_puffer.JPG/1024px-Whitespotted_puffer.JPG", 
            name: "John",
            food: "Starfish", 
            size: 18,
            species: "Whitespotetd Puffer",
            harvested: "2017"
        }
    ]
}




// Returns a copy of the fish array.
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish

    const holyFish = []

    for (const getHolyFish of getFish())  {
       
        if (getHolyFish.size % 3 === 0)  {
           holyFish.push(getHolyFish)
        }
         
    } 
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const getSoldiers of getFish()) {
        
        if (getSoldiers.size % 5 === 0)
            soldiers.push(getSoldiers)
        }
     
        return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const getRegFish of getFish()) {
        
        if (getRegFish.size % 3 !== 0 && getRegFish.size % 5 !== 0 ) {
            regularFish.push(getRegFish)
        } //else (getRegFish.size % 5 !== 0)

    }
    return regularFish
}