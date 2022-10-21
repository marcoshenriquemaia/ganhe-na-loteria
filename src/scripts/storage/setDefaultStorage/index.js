import { gameList } from "../../data/default/index.js"
import { STO } from "../../gameRules/mock/storage.js"

const setDefaultStorage = () => {
  const user = {
    character: {
      level: 1,
      multi: 1,
      money: 10,
      ticketDiscount: 0
    },
    gameSelected: gameList[0],
    gameList,
  }
  localStorage.setItem(STO, JSON.stringify(user))
}

export default setDefaultStorage