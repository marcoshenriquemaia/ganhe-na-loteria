import getUser from "../../storage/getUser/index.js"
import { sec } from "../../storage/sec/index.js"
import setMoney from "../../storage/setMoney/index.js"
import { STO } from "../mock/storage.js"
import updateDom from "../updateDom/index.js"

const unlockGame = (gameIndex) => {
  const user = getUser()

  const game = user.gameList[gameIndex]

  if (user.character.money < game.unlockPrice) return

  sec(JSON.stringify({
    ...user,
    gameList: user.gameList.map((game, i) => {
      if (i != gameIndex) return game
      return {
        ...game,
        unlock: true
      } 
    })
  }))

  localStorage.setItem(STO, JSON.stringify({
    ...user,
    gameList: user.gameList.map((game, i) => {
      if (i != gameIndex) return game
      return {
        ...game,
        unlock: true
      } 
    })
  }))
  
  setMoney({ toInclude: game.unlockPrice * -1 })
  updateDom({ updateList: true })

  console.log(game)
}

export default unlockGame