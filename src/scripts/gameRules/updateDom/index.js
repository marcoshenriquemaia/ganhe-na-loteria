import formatReal from "../../helpers/formatReal.js"
import getUser from "../../storage/getUser/index.js"
import { getTicketDiscount } from "../getTicketDiscount/index.js"
import printGameList from "../printGameList/index.js"
import upLevelPrice from "../upLevelPrice/index.js"

const updateDom = (props) => {
  const user = getUser()
  const $money = document.querySelector('.money')
  const $buttonUp = document.querySelector('.button-up')
  const $level = document.querySelector('.character-level')
  const $gameName = document.querySelector('.infos-game-name')
  const $multInfo = document.querySelector('.mult-info')
  // const $prob = document.querySelector('.prob')
  const $award = document.querySelector('.award b')
  const $playQuantity = document.querySelector('.character-play-quantity')
  const $buttonMult = document.querySelector('.button-buy-mult')
  const $ticketDiscount = document.querySelector('.ticket-discount')
  const $ticketDiscountInfo = document.querySelector('.ticket-discount-info')
  const timeMS = ((4000 / (user.character.level)))
  const timeS = (timeMS / 1000)

  $money.textContent = formatReal(user.character.money)
  $buttonUp.textContent = `Upar por ${formatReal(upLevelPrice(user.character.level))}`
  $level.textContent = `${user.character.level}`
  $multInfo.textContent = `${user.character.multi}x`
  // $gameName.textContent = user.gameSelected.name
  // $prob.textContent = `1/${user.gameSelected.prob}`
  // $award.textContent = formatReal(user.gameSelected.award + (ticketUnitPrice * user.gameSelected.prob))
  $playQuantity.textContent = `${(user.character.multi / timeS) >= 2 ? `${(user.character.multi / timeS).toFixed(2)} jogadas` : `${(user.character.multi / timeS).toFixed(2)} jogada`} por segundo`
  $buttonMult.textContent = `Comprar MULT por ${formatReal((user.character.multi) * 5000)}`
  $ticketDiscount.textContent = `Desconto no bilhete ${formatReal(getTicketDiscount())}` 
  $ticketDiscountInfo.textContent = `R$ -${user.character.ticketDiscount / 100}`
  props?.updateList && printGameList()
}

export default updateDom