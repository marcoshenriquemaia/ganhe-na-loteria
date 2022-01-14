import Confetti from "../../components/Confetti/index.js"
import setMoney from "../../storage/setMoney/index.js"
import createFeedback from "../createFeedback/index.js"
import play from "../play/index.js"
import progressBar from "../progressBar/index.js"
import updateDom from "../updateDom/index.js"

const recursivePlay = async () => {
  const storageUser = localStorage.getItem('loteria_user')
  const user = JSON.parse(storageUser)

  const currentGame = user.gameSelected

  progressBar(4000 / user.character.level)

  const won = [...new Array(user.character.multi)].some((_) => {
    return play({ prob: currentGame.prob })
  })
  
  if (currentGame.mega && won) alert('Você ganhou na Mega Sena!!!') 
  
  if (!won) {
    createFeedback('Errou!', user.character.multi, (4000 / (user.character.level)))
    return setTimeout(recursivePlay, 4000 / user.character.level)
  }
  
  setMoney({ toInclude: currentGame.award })
  
  updateDom()
  
  Confetti(currentGame.award, user.gameSelected, user)

  createFeedback('Acertou!', user.character.multi, (4000 / (user.character.level)))

  setTimeout(recursivePlay, (4000 / (user.character.level)))
}

export default recursivePlay