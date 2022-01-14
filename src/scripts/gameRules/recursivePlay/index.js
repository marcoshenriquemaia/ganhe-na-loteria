import setMoney from "../../storage/setMoney/index.js"
import createFeedback from "../createFeedback/index.js"
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

  if (currentGame.mega && won) alert('Você ganhou na Mega Sena!!!') 

  if (!won) {
    createFeedback('Errou!')
    return setTimeout(recursivePlay, 4000 / user.character.level)
  }

  setMoney({ toInclude: currentGame.award })

  updateDom()

  createFeedback('Acertou!')

  setTimeout(recursivePlay, (4000 / (user.character.level)))
}

export default recursivePlay