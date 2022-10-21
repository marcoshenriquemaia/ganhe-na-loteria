import formatReal from '../../helpers/formatReal.js'
import getUser from '../../storage/getUser/index.js'
import { sec } from '../../storage/sec/index.js'
import { STO } from '../mock/storage.js'
import updateDom from '../updateDom/index.js'
import upLevelPrice from '../upLevelPrice/index.js'

const up = (e) => {
  const user = getUser() 
  const costLevelPrice = upLevelPrice(user.character.level)

  console.log(costLevelPrice)

  if (costLevelPrice > user.character.money) return

  sec(JSON.stringify({
    ...user,
    character: {
      ...user.character,
      level: user.character.level + 1,
      money: user.character.money - costLevelPrice
    }
  }))

  localStorage.setItem(STO, JSON.stringify({
    ...user,
    character: {
      ...user.character,
      level: user.character.level + 1,
      money: user.character.money - costLevelPrice
    }
  }))

  updateDom()
}

export default up