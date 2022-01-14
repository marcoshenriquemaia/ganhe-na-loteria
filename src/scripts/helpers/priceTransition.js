import getMoney from './getMoney.js'

const priceTransition = ({ $element, newPrice, duration }) => {
	const newPriceInt = newPrice
	const currentPriceInt = getMoney($element.textContent) ? getMoney($element.textContent) / 100 : 0
	const newDuration = duration / 50

  
	const fakeArray = [...new Array(newDuration)].map((_) => true)
	const sumCoefficient = (newPriceInt - currentPriceInt) / newDuration
  
	const recursivePrint = (value, index) => {
		const formatedText = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

		$element.textContent = formatedText

		fakeArray[index] && setTimeout(() => recursivePrint(value + sumCoefficient, index + 1), 50)
	}

	recursivePrint(currentPriceInt, 0)
}

export default priceTransition
