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
            image: "https://cdn.britannica.com/44/4144-004-43DD2776/Peneus-setiferus.jpg",
            name: " Tim (Shrimp)",
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
//export 
const getFishes = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish

    const holyFish = []

    for (const getFish of getFishes())  {
       
        if (getFish.size % 3 === 0)  {
           holyFish.push(getFish)
        }
         
    } 
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const getSoldiers of getFishes()) {
        
        if (getSoldiers.size % 5 === 0)
            soldiers.push(getSoldiers)
        }
     
        return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const getRegFish of getFishes()) {
        
        if (getRegFish.size % 3 !== 0 && getRegFish.size % 5 !== 0 ) {
            regularFish.push(getRegFish)
        } //else (getRegFish.size % 5 !== 0)

    }
    return regularFish
}

