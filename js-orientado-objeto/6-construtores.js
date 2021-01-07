class Cliente {
    nome;
    #cpf;

    get cpf(){
        return this.#cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
    }
}

// a ideia da classe é inicializar o objeto e seus atributos sem permitir a modificacao do cpf
const clienteFulano = new Cliente('Fulano', 23302020091);
console.log(clienteFulano)
console.log(clienteFulano.cpf)

// testando a modificacao do cpf apos instanciamento
clienteFulano.cpf = 11111111111; 
// esperado uma exception de nao set property cpf

// o construtor te ajuda na inicializacao de objetos e ajuda a deixar o codigo mais limpo, alem de passar valores é possivel passar objetos de outras classes no construtor