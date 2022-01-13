import gameConfig from "../../gameConfig/index.js"
import formatReal from "../../helpers/formatReal.js"
import setMoney from "../../storage/setMoney/index.js"
import play from "../play/index.js"
import progressBar from "../progressBar/index.js"

const $money = document.querySelector('.money')

const recursivePlay = async () => {
  const storageUser = localStorage.getItem('loteria_user')
  const user = JSON.parse(storageUser)

  progressBar(2000 / user.character.level)

  const currentGame = user.gameList[gameConfig.currentGame]

  const won = play({ prob: currentGame.prob })

  if (!won) return setTimeout(recursivePlay, 2000 / user.character.level)

  setMoney({ toInclude: currentGame.award })

  $money.textContent = formatReal(user.character.money + currentGame.award)

  setTimeout(recursivePlay, 2000 / user.character.level)
}

export default recursivePlay