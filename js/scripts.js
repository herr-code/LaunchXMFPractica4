// DOM
const buttonElement = document.getElementById('button');
const divElement =  document.getElementById('pokedex-info');
const pokeImg = document.getElementById('pokeImg');

// Apis y programacion asincrona
const fetchPokemon = () => {
	const pokeName = document.getElementById('pokeName');
	let pokeInput = pokeName.value.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	
	fetch(url).then(res => {
		//console.log(res)=>Promesa
		if (res.status != 200) {
			console.log(res);
			pokeImage("./assets/img/ball96.png");
			divElement.innerHTML = "No encontrado";
		}else {
			return res.json();
		}
	})
	.then((data) => {
		console.log(data);
		// let pokeImg = data.sprites;
		let pokeImg = data.sprites.front_default;
		console.log(pokeImg);
		pokeImage(pokeImg);

		let name = data.name;
		let types = data.types;
		let moves =  data.moves;
		console.log(name, types, moves);
		console.log(types[0].type.name);
		divInfo(name, types, moves)
	});
}

const pokeImage = (url) => {
	pokeImg.src = url;	
} 

const divInfo = (name, types, moves) => {
	divElement.innerHTML = `<p>Nombre: ${name}</p>`;
	types.forEach((element) => {
		divElement.innerHTML += `<p>Tipo: ${element.type.name}</p>` });
	moves.forEach((element) => {
		divElement.innerHTML += `<p>${element.move.name}</p>`; });

	console.log("NAme")
}

// Accion
button.addEventListener('click', () => {
	// const pokeName = document.getElementById('pokeName');
	// let pokeInput = pokeName.value;
	// console.log("Hola" + pokeInput);

	fetchPokemon();
});