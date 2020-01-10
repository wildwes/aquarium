import { useTip } from "./tipDataProvider.js"
import dataComponent from "./tip.js"
const tipListComponent = () => {
    const contentElement = document.querySelector(".tips")
    const data = useTip()
    let allDataHTML = ""
    
    for (const tip of data) {
        const dataHTML = dataComponent(tip)
        allDataHTML += dataHTML
    }
    contentElement.innerHTML += `<section class="tipList">
        ${allDataHTML}
        </section>`
}
export default tipListComponent