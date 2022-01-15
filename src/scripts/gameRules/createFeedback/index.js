const createFeedback = (status, mult, ms) => {
  const $gameStatusBox = document.querySelector('.infos-box-right')
  const $selectGame = document.querySelector('.game.select')
  const randomNumber = Math.floor(Math.random() * 100)
  const yrandomNumber = Math.floor(Math.random() * 100)
  const randoMult = Math.floor(Math.random() * 2) >= 1 ? 1 : -1
  const yrandoMult = Math.floor(Math.random() * 2) >= 1 ? 1 : -1

  // const _status = document.createElement('h4')
  // status === 'Acertou!' && _status.classList.add('right')
  // _status.classList.add('game-status')
  // _status.textContent = status
  
  const _play = document.createElement('span')
  status === 'Acertou!' && _play.classList.add('right-play')
  _play.classList.add('play')
  _play.textContent = `${mult}x`
  _play.style.width = `${40 + (ms/100)}px`
  _play.style.height = `${40 + (ms/100)}px`
  _play.style.fontSize = `${15 + (ms/100)}px`

  setTimeout(() => {
    // _status.style.transform = `translate(${status === 'Acertou!' ? `-${randomNumber}` : `${randomNumber}`}px, -70px)`
    _play.style.transform = `translate(${randomNumber * randoMult}px, ${yrandomNumber * yrandoMult}px)`
    _play.style.opacity = '1'
  }, 50)

  // $gameStatusBox.appendChild(_status)
  $selectGame.appendChild(_play)

  setTimeout(() => {
    // _status.remove()
    _play.remove()
  }, 500)
} 

export default createFeedback