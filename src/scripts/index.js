import { addTicketDiscount } from "./gameRules/addTicketDiscount/index.js"
import buyMulti from "./gameRules/buyMulti/index.js"
import { STO } from "./gameRules/mock/storage.js"
import recursivePlay from "./gameRules/recursivePlay/index.js"
import up from "./gameRules/up/index.js"
import updateDom from "./gameRules/updateDom/index.js"
import setDefaultStorage from "./storage/setDefaultStorage/index.js"

const $buttonUp = document.querySelector('.button-up')
const $buttonMult = document.querySelector('.button-buy-mult')
const $ticketDiscount = document.querySelector('.ticket-discount')

const init = async () => {
  const currentUser = localStorage.getItem(STO)
  !currentUser && setDefaultStorage()
  updateDom({ updateList: true })
  recursivePlay()
}

$buttonUp.addEventListener('click', up)
$buttonMult.addEventListener('click', buyMulti)
$ticketDiscount.addEventListener('click', addTicketDiscount)

init()