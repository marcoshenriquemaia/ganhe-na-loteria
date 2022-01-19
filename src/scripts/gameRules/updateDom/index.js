import formatReal from "../../helpers/formatReal.js"
import getUser from "../../storage/getUser/index.js"
import printGameList from "../printGameList/index.js"
import upLevelPrice from "../upLevelPrice/index.js"

const updateDom = (props) => {
  const user = getUser()
  const $money = document.querySelector('.money')
  const $buttonUp = document.querySelector('.button-up')
  const $level = document.querySelector('.character-level')
  const $gameName = document.querySelector('.infos-game-name')
  const $prob = document.querySelector('.prob')
  const $award = document.querySelector('.award b')
  const $playQuantity = document.querySelector('.character-play-quantity')
  const $buttonMult = document.querySelector('.button-buy-mult')
  const ticketUnitPrice = user.gameSelected.ticket ? ((user.gameSelected.award / (user.gameSelected.prob * 1.8))) : 0

  $money.textContent = formatReal(user.character.money)
  $buttonUp.textContent = `Upar por ${formatReal(upLevelPrice(user.character.level))}`
  $level.textContent = `Nível ${user.character.level}`
  $gameName.textContent = user.gameSelected.name
  $prob.textContent = `1/${user.gameSelected.prob}`
  $award.textContent = formatReal(user.gameSelected.award + (ticketUnitPrice * user.gameSelected.prob))
  $playQuantity.textContent = `${user.character.multi > 1 ? `${user.character.multi} jogadas` : `${user.character.multi} jogada`} a cada ${((4000 / (user.character.level))).toFixed(2)} ms`
  $buttonMult.textContent = `Comprar MULT por ${formatReal((user.character.multi) * 5000)}`

  props?.updateList && printGameList()
}

export default updateDom