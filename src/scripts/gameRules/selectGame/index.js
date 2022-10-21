import getUser from "../../storage/getUser/index.js"
import { sec } from "../../storage/sec/index.js"
import { STO } from "../mock/storage.js"

const selectGame = (index) => {
  const user = getUser()

  sec(JSON.stringify({
    ...user,
    gameSelected: user.gameList[index]
  }))

  localStorage.setItem(STO, JSON.stringify({
    ...user,
    gameSelected: user.gameList[index]
  }))
} 

export default selectGame