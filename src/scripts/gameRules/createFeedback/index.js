const createFeedback = (status) => {
  const $gameStatusBox = document.querySelector('.infos-box-right')
  const randomNumber = Math.floor(Math.random() * 100)

  const _status = document.createElement('h4')
  _status.classList.add('game-status')
  status === 'Acertou!' && _status.classList.add('right')
  _status.textContent = status

  setTimeout(() => {
    _status.style.transform = `translate(${status === 'Acertou!' ? `-${randomNumber}` : `${randomNumber}`}px, -70px)`
  }, 50)

  $gameStatusBox.appendChild(_status)

  setTimeout(() => {
    _status.remove()
  }, 500)
} 

export default createFeedback