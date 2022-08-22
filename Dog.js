// Create the Dog class here
import dogData from "/data.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
    }
    getCharacterHtml() {
        const { name, age, avatar, bio} = this
        return `<div class="profile-card">
                <img class="profile-img" src="${avatar}" alt="image of teddy">
                <h1 class="profile-name">${name}, ${age}</h1>
                <p class="profile-para">${bio}</p>
                </div>`
    }
}

export default Character