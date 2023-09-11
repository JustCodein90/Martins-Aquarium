const databaseTips = {
    tips: [
        {   
            Species: " Red Belly Piranha",
            water: "Fresh",
            tank: 40,
            temp: 74 - 82,
        },
        {
            Species: " Whitespotted Puffer",
            water: " Salt",
            tank: 200,
            temp: 75 - 82,
        },
        {
            Species: " Clow Triggerfish",
            water: " Salt",
            tank: 200,
            temp: 76 - 82,
        },
        {
            Species: " Shrimp",
            water: " Salt",
            tank: 5,
            temp: 65 - 85,       
        }
    ]
}

export const getTips = () => {
    return databaseTips.tips.map(copyOfSingleTipObject => ({...copyOfSingleTipObject}))
}
