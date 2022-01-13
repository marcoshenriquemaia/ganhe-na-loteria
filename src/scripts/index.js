import buyMulti from "./gameRules/buyMulti/index.js"
import recursivePlay from "./gameRules/recursivePlay/index.js"
import up from "./gameRules/up/index.js"
import updateDom from "./gameRules/updateDom/index.js"
import setDefaultStorage from "./storage/setDefaultStorage/index.js"

const $buttonUp = document.querySelector('.button-up')
const $buttonMult = document.querySelector('.button-buy-mult')

const init = () => {
  const currentUser = localStorage.getItem('loteria_user')
  !currentUser && setDefaultStorage()
  updateDom({ updateList: true })
  recursivePlay()
}

$buttonUp.addEventListener('click', up)
$buttonMult.addEventListener('click', buyMulti)

init()