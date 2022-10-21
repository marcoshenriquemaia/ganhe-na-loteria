import { STO } from "../../gameRules/mock/storage.js";
import getUser from "../getUser/index.js";
import { sec } from "../sec/index.js";

const setMoney = ({ toInclude }) => {
  const user = getUser();

  const data = JSON.stringify({
    ...user,
    character: { ...user.character, money: user.character.money + toInclude },
  })

  sec(data)

  localStorage.setItem(
    STO,
    data
  );
};

export default setMoney;
