const formatReal = (number) => {
  return `R$ ${number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default formatReal