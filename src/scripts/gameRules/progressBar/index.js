import Element from "../../components/shared/Element/index.js"

const progressBar = (time) => {
  const $boxProgressBar = document.querySelector('.box-progress-time-bar')

  $boxProgressBar.innerHTML = ''

  const _progressBar = Element({
    elementType: 'div',
    classes: ['progress-time-bar']
  })

  $boxProgressBar.appendChild(_progressBar)
  
  _progressBar.style.animationDuration = `${time}ms`
}

export default progressBar