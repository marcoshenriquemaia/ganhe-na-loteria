import getUser from "../../storage/getUser/index.js";
import setMoney from "../../storage/setMoney/index.js";
import { getTicketDiscount } from "../getTicketDiscount/index.js";
import updateDom from "../updateDom/index.js";

export const addTicketDiscount = () => {
  const user = getUser();
  const { ticketDiscount } = user.character;

  if (user.character.money < getTicketDiscount()) return;

  localStorage.setItem(
    "loteria_user",
    JSON.stringify({
      ...user,
      character: { ...user.character, ticketDiscount: ticketDiscount + 1 },
    })
  );

  setMoney({ toInclude: getTicketDiscount() * -1 });

  updateDom({ updateList: true });
}