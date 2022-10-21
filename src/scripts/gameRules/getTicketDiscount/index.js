import getUser from "../../storage/getUser/index.js";

export const getTicketDiscount = () => {
  const user = getUser();

  return Math.pow(1.06, user.character.ticketDiscount)
}