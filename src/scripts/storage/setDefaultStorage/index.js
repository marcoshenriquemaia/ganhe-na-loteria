import { gameList } from "../../data/default/index.js"

const setDefaultStorage = () => {
  const user = {
    character: {
      level: 1,
      multi: 1,
      money: 9999999999
    },
    gameSelected: gameList[0],
    gameList,
  }
  localStorage.setItem('loteria_user', JSON.stringify(user))
}

export default setDefaultStorage