// Remember to import the data and Dog class!
import dogData from "/data.js"
import Character from "/Dog.js"

/*****
 * 1. Click cross to show nope✔️
 * 2. Click heart to show like✔️
 * 3. Upon clicking cross swipe to new profile
 * 4. Upon clicking heart swipe to new profile
 * 5. Refactor to use JS constructors✔️
 * 6. Refactor to use JS classes✔️
 * 7. Render dog profile in html with js✔️
 * ✔️
 * 
 */

const cross = document.getElementById("icon-cross")
const heart = document.getElementById("icon-heart")
const love = document.getElementById("like")
const hate = document .getElementById("hate")
let dogIndex = 0
let currentDog = new Character(dogData[dogIndex])


function seeNewDog() {
    setTimeout(() => {
    dogIndex += 1
    currentDog = new Character(dogData[dogIndex])
    if(dogIndex === 3) {
        let endMsg = document.querySelector(".container").innerHTML = `<h1 class="end-app-message">We're sorry, if you are seeing this then you have gone through all of the new profiles in your area.</h1>`
        endMsg.style.fontSize = "larger"
    }
    render()
    setTimeout(removeHate(), 1000)
    setTimeout(removeLike(), 1000)}, 2000)
}

function removeLike() {
    love.style.display = "none"
}

function removeHate() {
    hate.style.display = "none"
}

cross.addEventListener("click", function() {
    hate.style.display = "block"
    setTimeout(seeNewDog(), 1000)

})

heart.addEventListener("click", function() {
    love.style.display = "block"
    setTimeout(seeNewDog(), 1000)
})

function render() {
    document.getElementById("dog-character").innerHTML = currentDog.getCharacterHtml()
}

 render()

