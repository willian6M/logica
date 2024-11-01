class hero{
 constructor(nome , idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
}
atacar(){
    const ataques ={
        mago:"usou magia",
        monge:"usou artes marciais",
        guerreiro:"usou a espada",
        ninja:"usou shuriken"
    }



const ataque = ataques[this.tipo]
 
console.log(`O ${this.tipo} atacou usado ${ataque}`)
  }
}


const hero1 = new hero("endo", 15, "mago");
hero1.atacar() ;

const hero2 = new hero("musashi", 23, "ninja")
hero2.atacar()