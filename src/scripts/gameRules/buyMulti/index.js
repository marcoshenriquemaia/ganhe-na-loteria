import getUser from "../../storage/getUser/index.js"
import { sec } from "../../storage/sec/index.js"
import setMoney from "../../storage/setMoney/index.js"
import { STO } from "../mock/storage.js"
import updateDom from "../updateDom/index.js"

const buyMulti = () => {
  const user = getUser()

  if (user.character.money < user.character.multi * 5000) return

  sec(JSON.stringify({
    ...user,
    character: {
      ...user.character,
      multi: user.character.multi + 1
    }
  }))

  localStorage.setItem(STO, JSON.stringify({
    ...user,
    character: {
      ...user.character,
      multi: user.character.multi + 1
    }
  }))

  setMoney({ toInclude: user.character.multi * 5000 * -1 })

  updateDom()
}

export default buyMulti