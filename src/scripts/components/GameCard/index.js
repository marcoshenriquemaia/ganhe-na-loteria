import selectGame from "../../gameRules/selectGame/index.js"
import unlockGame from "../../gameRules/unlockGame/index.js"
import updateDom from "../../gameRules/updateDom/index.js"
import formatReal from "../../helpers/formatReal.js"
import getUser from "../../storage/getUser/index.js"
import Element from "../shared/Element/index.js"

const GameCard = ({ name, prob, award, image, unlock, unlockPrice, index, selected }) => {
  const unlockButton = Element({
    elementType: 'button',
    classes: ['unlock-button'],
    text: formatReal(unlockPrice)
  })
  
  const blockBox = Element({
    elementType: 'div',
    classes: ['block-box'],
    children: [unlockButton]
  })

  const awardElement = Element({
    elementType: 'b',
    text: formatReal(award)
  })

  const gameProb = Element({
    elementType: 'span',
    classes: ['game-prob'],
    text: `Probabilidade: 1/${prob}`
  })

  const gameName = Element({
    elementType: 'h3',
    classes: ['game-name'],
    text: name
  })

  const img = Element({
    elementType: 'img',
    classes: ['game-image'],
    src: image
  }) 

  const container = Element({
    elementType: 'li',
    classes: ['game', selected.name === name ? 'select': false],
    children: [img, gameName, gameProb, awardElement, !unlock ? blockBox : false]
  })

  container.addEventListener('click', () => {
    const $gameList = document.querySelectorAll('.game')

    if (!unlock) return
    
    selectGame(index)
    updateDom()

    $gameList.forEach($game => $game.classList.remove('select'))
    container.classList.add('select')
  })

  unlockButton.addEventListener('click', () => {
    const user = getUser()
    
    if (!user.gameList[index-1].unlock) return

    unlockGame(index)
    updateDom()
  })

  console.log(`select`, prob)

  return container
}

export default GameCard