import { locationList } from "./locationData.js";

export const locationListFunction = () => {

    const locations = locationList()

    let htmlString = '<article class="locationList">'

    for (const place of locations) {

    htmlString += `<section class="location__card">
    <div class="location__image"<span>Species:</span> ${place.image}</div>
    <div class="location__place"><span>Water:</span>  ${place.location}</div>
    <div class="location__fish"><span>Tank:</span>  ${place.fish}</div>
    </section>
    `}

  htmlString += `</article>`
 return htmlString
 
}
