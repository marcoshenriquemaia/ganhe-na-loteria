import getUser from "../getUser/index.js";

const setMoney = ({ toInclude }) => {
  const user = getUser();

  console.log(`toInclude`, toInclude)

  localStorage.setItem(
    "loteria_user",
    JSON.stringify({
      ...user,
      character: { ...user.character, money: user.character.money + toInclude },
    })
  );
};

export default setMoney;
