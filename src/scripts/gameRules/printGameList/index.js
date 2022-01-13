import GameCard from "../../components/GameCard/index.js"

const printGameList = () => {
  const $gameList = document.querySelector('.game-list')
  const storageUser = localStorage.getItem('loteria_user')
  const user = JSON.parse(storageUser)

  $gameList.innerHTML = ''

  user.gameList.forEach((game, index) => {
    const gameCard = GameCard({...game, index, selected: user.gameSelected})

    $gameList.appendChild(gameCard)
  })
}

export default printGameList