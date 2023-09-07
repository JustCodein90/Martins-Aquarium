/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
         {
            image:      ,
            name: "Bart",
            food: "crustaceans",
            size: 3,
            species: "Reef fish",
            harvested: "2019"
        },
        {
            image:    ,
            name: "Tim",
            food: "small fish",
            size: 3,
            species: "crustaceans",
            harvested: "2017"
        },
        {
            image:     ,
            name: "Bob",
            food: "small fish",
            size: 2,
            species: "piranha",
            harvested: "2019"
        }
    ]
}

// Returns a copy of the fish array.
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}