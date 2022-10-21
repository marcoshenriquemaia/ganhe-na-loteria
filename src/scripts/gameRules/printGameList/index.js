import GameCard from "../../components/GameCard/index.js"
import { STO } from "../mock/storage.js"

const printGameList = () => {
  const $gameList = document.querySelector('.game-list')
  const storageUser = localStorage.getItem(STO)
  const user = JSON.parse(storageUser)

  console.log(`user`, user)

  $gameList.innerHTML = ''

  user.gameList.forEach((game, index) => {
    const gameCard = GameCard({...game, index, selected: user.gameSelected})

    $gameList.appendChild(gameCard)
  })
}

export default printGameList