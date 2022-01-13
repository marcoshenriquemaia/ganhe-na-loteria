import setMoney from "../../storage/setMoney/index.js"
import play from "../play/index.js"
import progressBar from "../progressBar/index.js"
import updateDom from "../updateDom/index.js"

const recursivePlay = async () => {
  const $gameStatus = document.querySelector('.game-status')
  const storageUser = localStorage.getItem('loteria_user')
  const user = JSON.parse(storageUser)

  progressBar(4000 / user.character.level)

  const currentGame = user.gameSelected

  const won = [...new Array(user.character.multi)].some((_) => {
    return play({ prob: currentGame.prob })
  })

  if (!won) {
    $gameStatus.textContent = 'Errou!'
    $gameStatus.classList.remove('right')
    return setTimeout(recursivePlay, 4000 / user.character.level)
  }

  setMoney({ toInclude: currentGame.award })

  updateDom()

  $gameStatus.textContent = 'Acertou!'
  $gameStatus.classList.add('right')

  setTimeout(recursivePlay, (4000 / (user.character.level)))
}

export default recursivePlay