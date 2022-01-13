import formatReal from "../../helpers/formatReal.js"
import Element from "../shared/Element/index.js"

const GameCard = ({ name, prob, award, image, unlock, unlockPrice }) => {
  const unlockButton = Element({
    elementType: 'button',
    classes: ['unlock-button'],
    text: `R$ ${unlockPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
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
    classes: ['game'],
    children: [img, gameName, gameProb, awardElement, !unlock ? blockBox : false]
  })

  return container
}

{/* <div class='block-box'>
              <button class='unlock-button'>R$ 50.000</button>
            </div> */}

export default GameCard