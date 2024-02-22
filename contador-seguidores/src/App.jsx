import { useEffect, useState } from 'react'

import './App.css'

import twitterLogo from "./assets/twitter.svg"
import youtubeLogo from "./assets/facebook.svg"
import facebookLogo from "./assets/youtube.svg"

function App() {
	const [percentage, setPercentage] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			if (percentage < 100) {
				setPercentage(percentage + 0.005)
			}
		}, 1)
	}, [percentage])

	const elements = [
		{
			"icon": twitterLogo,
			"number": 12000,
			"msg": "Seguidores do twitter"
		},
		{
			"icon": facebookLogo,
			"number": 7500,
			"msg": "Fãs do Facebook"
		},
		{
			"icon": youtubeLogo,
			"number": 5000,
			"msg": "Assinantes do YouTube"
		},
	]

	return (
		<>
			<div className='main-container'>
				{elements.map((element, index) => (
					<div className='minor-container' key={index}>
						<img className="logo" src={element.icon} alt="foto de rede social" />
						<h1>{Math.ceil(element.number * percentage)}</h1>
						<h5>{element.msg}</h5>
					</div>
				))}
			</div>
		</>
	)
}

export default App
