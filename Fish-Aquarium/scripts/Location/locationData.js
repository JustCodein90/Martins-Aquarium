const locationDatabase = {
    locationFish: [

        {
            image: "https://english.kathmandupati.com/wp-content/uploads/2020/08/indo-pacific-e1597937507987.jpg",
            location: " Indo Pacific",
            fish: " White Spotted Puffer, ",
        },
        {
            image: "https://media.newsela.com/article_media/extra/NewselaAmazonBasinMap.jpg",
            location:"Amazon River Basin",
            fish: " Red Belly Piranha",
        },
        {
            image: "https://secureservercdn.net/45.40.148.147/v0l.4c9.myftpupload.com/wp-content/uploads/2015/10/solo-travel-in-Yemen-beach.jpg",
            location:" Idian Ocean",
            fish: " Clown Trigger Fish",
        },
        {
            image: "https://www.wallpapers13.com/wp-content/uploads/2016/07/Shifen-Falls-is-a-picturesque-waterfall-located-in-Pingxi-District-New-Taipei-City-Taiwan-the-upper-reaches-of-the-river-Keelung-1680x1050.jpg",
            location:" Taiwan",
            fish: " Red Cherry Shrimp"
        }
        
    ] 
            
}

export const locationList = () => {
    return locationDataBase.locationFish.map(copyOfSingleLocationObject => ({...copyOfSingleLocationObject}))
}
    
    
    
    
        

    
    
