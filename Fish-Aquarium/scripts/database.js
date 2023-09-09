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
            size: ` ${18} inches `,
            species: " Clown Triggerfish",
            harvested: " 2015"
        },
        {
            image: "https://cdn.britannica.com/44/4144-004-43DD2776/Peneus-setiferus.jpg",
            name: " Tim (Shrimp)",
            food: " Algae",
            size: ` ${2} inches`,
            species: " Crustaceans",
            harvested: " 2017"
        },
        {
            image: "https://images.surferseo.art/821fd378-4024-4723-b156-c842a200e585.jpeg",
            name: " Bob",
            food: " Fish",
            size: ` ${12} inches`,
            species: " Red Belly Piranha",
            harvested: " 2019"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Whitespotted_puffer.JPG/1024px-Whitespotted_puffer.JPG", 
            name: "John",
            food: "Starfish", 
            size: ` ${18} inches`,
            speacies: "Whitespotetd Puffer",
            harvested: "2017"
        }
    ]
}

// Returns a copy of the fish array.
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}