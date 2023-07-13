// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import restaurantImg from '../../assets/restaurant.png'
import './styles.css'
import axios from 'axios'

export default function Logon() {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const navigate = useNavigate()

	axios.create({ baseURL: 'http://localhost:3000' })

	async function handleLogin(e) {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:3000/login',
				{ email, pass }
			)
			console.log(response)
			console.log(response.data[0].name)

			localStorage.setItem('userId', response.data[0].id)
			localStorage.setItem('userName', response.data[0].name)
			navigate("/home")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<p>
					Comanda <br></br>Online
				</p>
				<form onSubmit={handleLogin}>
					<h1>Faça seu Logon</h1>
					<input
						id="email"
						placeholder="E-mail"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						id="pass"
						placeholder="Senha"
						type='password'
						onChange={(e) => setPass(e.target.value)}
					/>
					<button className="button validate" type="submit">
						Entrar
					</button>
					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#1976D2" />
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img
				src={restaurantImg}
				className="background"
				alt="Restaurante"
			/>
		</div>
	)
}
