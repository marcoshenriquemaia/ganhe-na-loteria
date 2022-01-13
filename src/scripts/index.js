import GameCard from "./components/GameCard/index.js"
import play from "./gameRules/play/index.js"
import recursivePlay from "./gameRules/recursivePlay/index.js"
import setDefaultStorage from "./storage/setDefaultStorage/index.js"
import setMoney from "./storage/setMoney/index.js"
const $gameList = document.querySelector('.game-list')

const init = () => {
  const currentUser = localStorage.getItem('loteria_user')
  !currentUser && setDefaultStorage()
  printGameList()
  recursivePlay()
}

const printGameList = () => {
  const storageUser = localStorage.getItem('loteria_user')
  const user = JSON.parse(storageUser)

  user.gameList.forEach(game => {
    const gameCard = GameCard(game)

    console.log(`gameCard`, gameCard)

    $gameList.appendChild(gameCard)
  })
}

init()