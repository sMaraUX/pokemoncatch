//CLASE POKEMON
class Pokemon {
    constructor(nombre, vida, ataque1, ataque2, img, id) {
      this.nombre = nombre
      this.vida = vida
      this.ataque = ataque1
      this.ataque2 = ataque2
      this.img = img
      this.id = id
    }
    //METODO BATALLA
  }
  
  // //CLASES HIJAS: Pokemons disponibles
  
  // class Pikachu extends Pokemon {
  //   constructor(nombre, vida, ataque, ataque2, img) {
  //     super(nombre, vida, ataque, ataque2, img)
  //   }
  // }
  // class Charmander extends Pokemon {
  //   constructor(nombre, vida, ataque, ataque2, img) {
  //     super(nombre, vida, ataque, ataque2, img)
  //   }
  // }
  // class Squirtle extends Pokemon {
  //   constructor(nombre, vida, ataque, ataque2, img) {
  //     super(nombre, vida, ataque, ataque2, img)
  //   }
  // }
  // class Bulbasaur extends Pokemon {
  //   constructor(nombre, vida, ataque, ataque2, img) {
  //     super(nombre, vida, ataque, ataque2, img)
  //   }
  // }
  
  // ataques y daños
  
  const impactTrueno = 230
  const rayo = 300
  const lanzallamas = 230
  const ascuas = 120
  const pistoladeAgua = 210
  const burbujas = 150
  const latigazo = 200
  const latigoCepa = 60
  
  
  // GENERANDO POKEMONS
  
  const pikachu = new Pokemon("Pikachu", 1350, impactTrueno, rayo, "Pikachu.png", "pikachuId")
  const charmander = new Pokemon("Charmander", 1260, lanzallamas, ascuas, "Charmander.png", "charmanderId")
  const squirtle = new Pokemon("Squirtle", 1250, pistoladeAgua, burbujas, "Squirtle.png", "squirtleId")
  const bulbasaur = new Pokemon("Bulbasaur", 1210, latigazo, latigoCepa, "Bulbasaur.png", "bulbasaurId")

  const pokebolas = [pikachu, charmander, squirtle, bulbasaur]

// cards

const pokebolasEleccion = document.getElementById('PokebolasEleccion')

pokebolas.forEach(pokebolas => {
  pokebolasEleccion.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body" id="${pokebolas.id}" >
                <h5 class="card-title">${pokebolas.nombre}</h5>
                <p class="card-text">Vida: ${pokebolas.vida}</p>
                <p class="card-text">Ataque 1: ${pokebolas.ataque}</p>
                <p class="card-text">Ataque 2: ${pokebolas.ataque2}</p>
                <img src="${pokebolas.img}" width="100px" height="auto"/>
                <button>Catch</button>
        </div>
        </div>`
})


const pikachuId = document.getElementById("pikachuId")

pikachuId.addEventListener("click", () => {
    pikachuId.innerHTML = `
    <img src="Pokeball.png" width="100px" height="auto"/>
    `
    
})

const charmanderId = document.getElementById("charmanderId")

charmanderId.addEventListener("click", () => {
  charmanderId.innerHTML = `
  <img src="Pokeball.png" width="100px" height="auto"/>
  `
  
})

const squirtleId = document.getElementById("squirtleId")


squirtleId.addEventListener("click", () => {
  squirtleId.innerHTML = `
  <img src="Pokeball.png" width="100px" height="auto"/>
  `
  
})
const bulbasaurId = document.getElementById("bulbasaurId")
bulbasaurId.addEventListener("click", () => {
  bulbasaurId.innerHTML = `
  <img src="Pokeball.png" width="100px" height="auto"/>
  `
  
})



  ////////////////////////////////////////////////////////////////////////
/////////////////////////// nuevo juego ////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

// function abrir_1(){
//     pokeballpikachu = document.getElementById("pokebola1")
//     pokeballpikachu.classList.toggle("pokebola1_close")
//     pokeballpikachu.classList.toggle("pokebola1_open")
//     }
// function abrir_2(){

//     pokeballcharmander = document.getElementById("pokebola2")
//     pokeballcharmander.classList.toggle("pokebola2_close")
//     pokeballcharmander.classList.toggle("pokebola2_open")
//     }

// function abrir_3(){
//     pokeballsquirtle = document.getElementById("pokebola3")
//     pokeballsquirtle.classList.toggle("pokebola3_close")
//     pokeballsquirtle.classList.toggle("pokebola3_open")
//     }
    
// function abrir_4(){
    
//     pokeballbulbasaur = document.getElementById("pokebola4")
//     pokeballbulbasaur.classList.toggle("pokebola4_close")
//     pokeballbulbasaur.classList.toggle("pokebola4_open")
//     }









// const pokebola1 = document.querySelector("#pokebola1")


// pokebola1.addEventListener('click', () => {
//     pokebola1.removeChild(pokebola1);
// })