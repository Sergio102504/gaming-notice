import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { Container } from "react-bootstrap";
import "../style/login.css";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const LoginPage = () => {
	const navigate = useNavigate();
	

	const { email, password, onInputChange, onResetForm } =
		useForm({
			email: '',
			password: '',
		});
		localStorage.removeItem("token")

	const onLogin = e => {
		e.preventDefault();
		if (email === "quinterosergio588@gmail.com" && password === "4567") {
			localStorage.setItem("token" , "true")
			navigate('/dashboard', {
				replace: true,
				state: {
					logged: true,
					
				},
			});
		}else{
			alert('Usuario o contraseña incorrectos');
		}

		

		onResetForm();
	};

	return (
		<Container>
			
		<div className='wrapper'>
			<form onSubmit={onLogin}>
				<h1 style={{color:"white"}}>Iniciar Sesión</h1>

				<div className='input-group'>
				<label style={{color:"white"}} htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>
				<div className='input-group'>
				<label style={{color:"white"}}  htmlFor='password'>Contraseña:</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					
				</div>

				<button class="btn btn-primary">Entrar</button>
			</form>
		</div>
		</Container>
	);
};
