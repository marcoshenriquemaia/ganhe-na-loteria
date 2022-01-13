import getUser from "../../storage/getUser/index.js"

const selectGame = (index) => {
  const user = getUser()

  localStorage.setItem('loteria_user', JSON.stringify({
    ...user,
    gameSelected: user.gameList[index]
  }))
} 

export default selectGame