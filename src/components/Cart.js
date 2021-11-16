// useState permet au composant Cart d'etre stateful 
// => les données sont sauvgardées dans le panier
// ==> on peut re-render autant de fois qu'on veut les données ne seront pas perdues.
import { useState } from 'react'

// useState est un hook
// => il permet d'ajouter le state local React à des composants fonctions
// ==> un hook est une fonction qui se permet de se brancher sur des fonctionnalités React


import '../styles/Cart.css'


function Cart() {
	const monsteraPrice = 8

	// fonction qui permet de mettre à jour le state
	// => Ceci est un hook (tableau => décomposition)

	// useState renvoi 2 éléments

	// const cartState = useState(0) ==> il faut préciser une valeur dans le state sinon elle est undefined
	// const cart = cartState[0] ==> cart est la valeur actuelle
	// const updateCart = cartState[1] ==> fonction qui permet de le modifier 


	const [cart, updateCart] = useState(0)

	const [isOpen, setIsOpen] = useState(true)


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>
				Monstera : {monsteraPrice}€
				{/* boutton qui permet de mettre à jour le state */}
				<button onClick={() => updateCart(cart + 1)}>Ajouter
				</button>
			</div>
			<h3>Total: {monsteraPrice * cart}€</h3>
			< button onClick={() => updateCart(0)}>Vider le panier
				</ button>
		</div >


	) : (
		<button onClick={() => setIsOpen(true)}>Ovrir le Panier</button>
	)
}

export default Cart