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
  const ticketUnitPrice = currentGame.ticket ? Number(((currentGame.award / (currentGame.prob * 1.8))).toFixed(2)) - (user.character.ticketDiscount / 100) : 0
  const ticketPrice = currentGame.ticket ? ticketUnitPrice * user.character.multi : 0

  if (user.character.money < ticketPrice && currentGame.ticket) return setTimeout(recursivePlay, (4000 / (user.character.level)))

  progressBar(4000 / user.character.level)

  currentGame.ticket && setMoney({ toInclude: ticketPrice * -1 })

  const won = [...new Array(user.character.multi)].some((_) => {
    return play({ prob: currentGame.prob })
  })
  
  if (currentGame.mega && won) alert('Você ganhou na Mega Sena!!!') 
  
  if (!won) {
    updateDom()
    
    createFeedback('Errou!', user.character.multi, (4000 / (user.character.level)))
    return setTimeout(recursivePlay, 4000 / user.character.level)
  }
  
  setMoney({ toInclude: currentGame.award + (ticketUnitPrice * currentGame.prob) })
  
  updateDom()
  
  Confetti(currentGame.award, user.gameSelected, user)

  createFeedback('Acertou!', user.character.multi, (4000 / (user.character.level)))

  setTimeout(recursivePlay, (4000 / (user.character.level)))
}

export default recursivePlay