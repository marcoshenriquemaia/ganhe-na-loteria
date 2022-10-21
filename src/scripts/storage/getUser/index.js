import { STO } from "../../gameRules/mock/storage.js"

const getUser = () => {
  const storageUser = localStorage.getItem(STO)
  return JSON.parse(storageUser)
}

export default getUser