import getUser from "../getUser/index.js";

const setMoney = ({ toInclude }) => {
  const user = getUser();

  localStorage.setItem(
    "loteria_user",
    JSON.stringify({
      ...user,
      character: { ...user.character, money: user.character.money + toInclude },
    })
  );
};

export default setMoney;
