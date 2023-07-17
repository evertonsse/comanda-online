// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

export default function CreateUser() { 

	const [name, setName] = useState('')
	const [email, setemail] = useState('')
	const [passWord, setpassWord] = useState('')

	async function createEmployee(e) {
		e.preventDefault()
		console.log(email, name, passWord)
	}

	return (
		<div className="regsiter-container">
			<div className="content">
				<h1>Cadastro</h1>

				<Link className="back-link" to="/">
					<FiArrowLeft size={16} color="#1976D2" />
					Voltar para o Logon
				</Link>

				<form onSubmit={createEmployee}>
					<input
						placeholder="Nome"
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						placeholder="E-mail"
						type="email"
						onChange={(e) => setemail(e.target.value)}
					/>
					<input
						placeholder="Senha"
						type="password"
						onChange={(e) =>
							setpassWord(e.target.value)
						}
					/>
					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	)
}
