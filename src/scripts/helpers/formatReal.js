const formatReal = (string) => {
  return `R$ ${string.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export default formatReal 