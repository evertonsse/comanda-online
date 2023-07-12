// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import restaurantImg  from '../../assets/restaurant.png'
import './styles.css';

export default function Logon() {
	const [id, setId] = useState('')
	const [pass, setPass] = useState('')
	const history = useHistory()

	async function handleLogin(e) { 
		

		e.preventDefault()
	} 

	return (
		<div className="logon-container">
			<section className="form">
				<p>Comanda <br></br>Online</p>
				<form onSubmit={handleLogin}>
					<h1>Faça seu Logon</h1>
					<input  id= "id" placeholder="Sua ID" />
					<input id= "pass" placeholder="Senha" />
					<button className="button validate" type="submit">
						Entrar
					</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#1976D2" />
                    Não tenho cadastro
                    </Link>
				</form>
			</section>

            <img src={restaurantImg} className="background"alt="Restaurante" />
		</div>
	)
}
