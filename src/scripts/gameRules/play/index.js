const play = ({ prob }) => {
  const attempt = Math.floor(Math.random() * prob)
  const randomNumber = Math.floor(Math.random() * prob)

  return attempt === randomNumber
}

export default play