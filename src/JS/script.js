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