const Confetti = (award, currentGame, user) => {
  const canvas = document.querySelectorAll('.confetti')
  const gameList = user.gameList
  const unlockGame = gameList.filter(game => game.unlock)
  const lastUnlockGame = unlockGame[unlockGame.length - 1]
  
  canvas.forEach($canva => {
    const jsConfetti = new JSConfetti({ canvas: $canva })

    currentGame.name === lastUnlockGame.name && jsConfetti.addConfetti({
      emojis: ['💲'],
      emojiSize: 50,
      confettiNumber: 100,
    })
  })
}

export default Confetti