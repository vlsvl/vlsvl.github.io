// import './../styles/style.scss'

console.log("Intresting");

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}`

// Create head node
const heading = document.createElement('h1')
heading.textContent = 'Intresting'

const app = document.querySelector('#root')
app.append(heading, p)

