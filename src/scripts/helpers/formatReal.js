const formatReal = (number) => {
  const formatedNumber = Number(number.toFixed(2))
  return `R$ ${formatedNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export default formatReal