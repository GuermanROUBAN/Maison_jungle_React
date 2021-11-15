import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='my_input' defaultValue='Tapez votre texte' />
				<button type='submit'>Entrer</button>
			</form>
		</li>
	)
}

function handleClick(e) {
	console.log('✨ Ceci est mon event :', e)
}


function handleSubmit(e) {
	e.preventDefault()
	alert(e.target['my_input'].value)
}
export default PlantItem