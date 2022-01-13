import gameConfig from "../../gameConfig/index.js"

const upLevelPrice = (level) => {
  return Math.pow(level, gameConfig.levelPriceMult)
}

export default upLevelPrice