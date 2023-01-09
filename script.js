//MATRIZ DE POKÉMON
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },   
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
// Lista de pokémon que tengan nombres que comiencen con la letra "B" 
const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(`Comienzan con B`, bListPkmn);

// Matriz que muestra todos los id
const pkmnIds = pokemon.map( p => p.id );
console.log(`Pokémons ids`,pkmnIds);

//Objetos Pokémon donde el id es divisible por 3
const idsDivisibleBy3 =  pokemon.filter(p => p.id % 3 === 0);
console.log(`Id divisible por 3`, idsDivisibleBy3);

//Serie de objetos Pokémon que son del tipo "fuego"
const pkmnFire = pokemon.filter( p => p.types.includes("fire"));
console.log(`Son de tipo fuego`,pkmnFire);

//Una variedad de objetos Pokémon que tienen más de un tipo
const pkmnTwoTypes = pokemon.filter(p => p.types.length> 1);
console.log(`Tienen más de un tipo`, pkmnTwoTypes);

//Una matriz con solo los nombres de los Pokémon
const pkmnNames = pokemon.map( p => p.name);
console.log(`Pokémons`,pkmnNames);

//Una matriz con solo los nombres de Pokémon con una id> 99
const idsGreaterthan99 = pokemon.filter(p => p.id > 99).map(p=> p.name);
console.log(`Pokémons con id> 99`,idsGreaterthan99);

//Matriz con solo los nombres del pokémon cuyo único tipo es veneno.
const pkmnPoison = pokemon.filter(p => p.types == 'poison').map(p=> p.name);
console.log(`Pokémons de tipo veneno solamente`,pkmnPoison);

// Matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const pkmnFlying = pokemon.filter(p => p.types[1]== 'flying').map(p=> p.types[0]);
console.log(`Los de tipos volador también son `,pkmnFlying);

//Recuento de la cantidad de pokémon que son de tipo "normal"
const pkmnNormal = pokemon.filter(p => p.types.includes("normal")).length;
console.log(`Existen ${pkmnNormal} pokémons tipo normal`);
