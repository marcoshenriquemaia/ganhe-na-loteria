import getUser from "../../storage/getUser/index.js"
import setMoney from "../../storage/setMoney/index.js"
import updateDom from "../updateDom/index.js"

const buyMulti = () => {
  const user = getUser()

  if (user.character.money < user.character.multi * 1500) return

  localStorage.setItem('loteria_user', JSON.stringify({
    ...user,
    character: {
      ...user.character,
      multi: user.character.multi + 1
    }
  }))

  setMoney({ toInclude: user.character.multi * 1500 * -1 })

  updateDom()
}

export default buyMulti