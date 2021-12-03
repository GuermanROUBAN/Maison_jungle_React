// useState permet au composant Cart d'etre stateful 
// => les données sont sauvgardées dans le panier
// ==> on peut re-render autant de fois qu'on veut les données ne seront pas perdues.
import { useState } from 'react'

// useState est un hook
// => il permet d'ajouter le state local React à des composants fonctions
// ==> un hook est une fonction qui se permet de se brancher sur des fonctionnalités React


import '../styles/Cart.css'


function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	// fonction qui permet de mettre à jour le state
	// => Ceci est un hook (tableau => décomposition)

	// useState renvoi 2 éléments

	// const cartState = useState(0) ==> il faut préciser une valeur dans le state sinon elle est undefined
	// const cart = cartState[0] ==> cart est la valeur actuelle
	// const updateCart = cartState[1] ==> fonction qui permet de le modifier 

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					< button onClick={() => updateCart([])}>Vider le panier</ button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ovrir le Panier
			</button >
		</div >
	)
}

export default Cart

