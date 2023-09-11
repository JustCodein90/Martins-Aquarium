import { getTips } from "./dataTips.js";

export const tipsListFunction = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList">'

    // Create HTML representations of each fish here
    for (const singleTip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tips__card">
            <div class="tips__species"<span>Species:</span> ${singleTip.Species}</div>
            <div class="tips__water"><span>Water:</span>  ${singleTip.water}</div>
            <div class="tips__tank"><span>Tank:</span>  ${singleTip.tank}</div>
            <div class="tips__temp"><span>Temp:</span>  ${singleTip.temp}</div>
            </section>
`
    }
    htmlString += `</article>`
    return htmlString
}