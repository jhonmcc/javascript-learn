// atributos staticos sao utilizados para definir variaveis que sofrerao modificacao independente do instanciamento do obj
class Cliente {
    static contIntancias = 0;
    nome; // é recomendavel dar origem nas variaveis no metodo construtor
    #cpf; // é recomendavel dar origem nas variaveis no metodo construtor e utilizar os modificadores quando for privado

    get cpf(){
        return this.#cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
        Cliente.contIntancias++;
        // a forma de acesso fica diferente
    }
}

const c1 = new Cliente('c1', 321);
const c2 = new Cliente('c2', 123);

console.log(Cliente.contIntancias)