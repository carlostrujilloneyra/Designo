// Interacción para el menú hamburguesa
const showNav = (idHamburguer, idNav, idHero) => {
	const hamburguer = document.getElementById(idHamburguer)
	const nav = document.getElementById(idNav)
	const hero = document.getElementById(idHero)

	if(hamburguer, nav, hero){
		hamburguer.addEventListener('click', () => {
			hamburguer.classList.toggle('main-hamburguer--new')
			nav.classList.toggle('main-header__nav--new')
			hero.classList.toggle('main-hero--new')
		})
	}
}

showNav('main-hamburguer', 'main-nav','main-hero');

// Pequeña validación para el formulario
const form = document.getElementById('main-form')
const email = document.getElementById('email')

if(form, email){
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		checkEmail();
	})	
}
const checkEmail = () => {
	const emailValue = email.value.trim();
	
	if(emailValue === ''){
		// Mandamos una función que avise que no puede estar vacío
		setError('Email cannot be blank' );

	}else if (!isEmail(emailValue)){
		setError('Not a valid email');

	}else{
		setSucces (email);
	}
}

// Función que manda mensaje de error
const setError = (message) => {
	const small = document.getElementById('small');
	small.className = 'small-error';
	small.innerText = message;

	setTimeout(() => {
		small.className = 'delete';
	}, 3000);
}

// Función que se ejecuta cuando se ingresó el email y es correcto
const setSucces = () => {
	form.reset();
	const containerForm = document.getElementById('container-form');
	const messageSucces = document.createElement('p');
	messageSucces.innerText= '¡Submitted successfully!';
	messageSucces.className = 'email-succes';
	containerForm.append(messageSucces);

	setTimeout(() => {
		messageSucces.innerText = '';
	}, 3000);
}

// Función que verifica si es un email lo que ingresamos
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

