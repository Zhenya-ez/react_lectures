import React from "react";
import "./App.css";

// inputs
// controlled vs uncontrolled
// ref

function App() {
	//controlled inputs

	// const firstName = React.useRef(); //через ref доступ до елементів
	// const lastName = React.useRef();
	// const email = React.useRef();
	// const age = React.useRef();
	// const pass = React.useRef();

	// const form = React.useRef();

	// const onSubmit = (e) => {
	// 	e.preventDefault(); //робиться по дефолту

		// console.log({ firstName });
		// firstName.current.value = ""; //наприклад очистити поле при кліку на submit
		// firstName.current.focus(); //фокус при кліку на submit (можна юзати всі методи з DOMу)
		// firstName.current.style.background = "red"; //змінити стиль

		// з прив'язкою до input name="firstName"
		// 		const {
		// 			target: {
		// 				elements: {
		// 				firstName,
		// 				lastName,
		// 				email,
		// 				age,
		// 				pass,
		// 		}
		// 	}
		// } = e;

		// console.log({ firstName, lastName, email, age, pass });
		//якщо робимо через name то - firstName.value, якщо через ref то - firstName.current.value
		// alert(
		// 	JSON.stringify(
		// 		{
		// 			firstName: firstName.current.value,
		// 			lastName: lastName.current.value,
		// 			email: email.current.value,
		// 			age: age.current.value,
		// 			pass: pass.current.value,
		// 		},
		// 		null,
		// 		2
		// 	)
		// ); //   для null, 2 для того, щоб в алерті все відображалось в стовпчик

		// для очистки форм
		// firstName: firstName.current.value = '';
		// lastName: lastName.current.value = '';
		// email: email.current.value = '';
		// age: age.current.value = '';
		// pass: pass.current.value = '';
		
		//!чому бахає помилку
		// form.current.reset();
	
		//controlled inputs - частіше за все використовується
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [age, setAge] = React.useState('');
	const [pass, setPass] = React.useState('');

	const handleSubmit = () => {
		alert(JSON.stringify({
			firstName,
			lastName,
			email,
			age,
			pass,
		}, null, 2))

	}

	return (
		// <div className="App">
		// 	<h1>this is input!</h1>
		// 	<form onSubmit={onSubmit}>
		// 		<input
		// 			ref={firstName}
		// 			type="text"
		// 			name="firstName" //без name буде працювати коли є ref, але його треба добавляти
		// 			placeholder="enter your first name"
		// 		/>
		// 		<br />
		// 		<br />
		// 		<input
		// 			ref={lastName}
		// 			type="text"
		// 			name="lastName"
		// 			placeholder="enter your last name"
		// 		/>
		// 		<br />
		// 		<br />
		// 		<input
		// 			ref={email}
		// 			type="email"
		// 			name="email"
		// 			placeholder="enter your email"
		// 		/>
		// 		<br />
		// 		<br />
		// 		<input
		// 			ref={age}
		// 			type="number"
		// 			name="age"
		// 			placeholder="enter your age"
		// 		/>
		// 		<br />
		// 		<br />
		// 		<input
		// 			ref={pass}
		// 			type="password"
		// 			name="pass"
		// 			placeholder="enter your pass"
		// 		/>

		// 		<button type="submit">submit</button>
		// 	</form>
		// </div>


				<div className="App">
			<h1>this is input!</h1>
				<input
					value={firstName} 
					onChange={({target: {value}}) => setFirstName(value)}
					type="text"
					name="firstName" 
					placeholder="enter your first name"
				/>
				<br />
				<br />
				<input
				value={lastName}
				onChange={({target: {value}}) => setLastName(value)}
					type="text"
					name="lastName"
					placeholder="enter your last name"
				/>
				<br />
				<br />
				<input
				value={email}
				onChange={({target: {value}}) => setEmail(value)}
					type="email"
					name="email"
					placeholder="enter your email"
				/>
				<br />
				<br />
				<input
				value={age}
				onChange={({target: {value}}) => setAge(value)}
					type="number"
					name="age"
					placeholder="enter your age"
				/>
				<br />
				<br />
				<input
				value={pass}
				onChange={({target: {value}}) => setPass(value)}
					type="password"
					name="pass"
					placeholder="enter your pass"
				/>

				<button onClick={handleSubmit}>submit</button>
		</div>

	);
}

export default App;
