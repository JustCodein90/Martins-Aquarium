import { getLocation } from "./locationData.js";

export const locationListFunction = () => {

    const locations = getLocation()

    let htmlString = '<article class="location__List">'

    for (const place of locations) {

    htmlString += `<section class="location__card">
      <div><img class="location__image" scr="${place.image}" /></div>
      <div class="location__place"><span>Water:</span>  ${place.location}</div>
      <div class="location__fish"><span>Tank:</span>  ${place.fish}</div>
    </section>
    `}

  htmlString += `</article>`
 return htmlString
 
}
