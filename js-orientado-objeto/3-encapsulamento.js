// proposta de encapsuamento das propiedades utilizando #

class Conta{
    agencia;
    #saldo;

    setSaldo(value){
        this.#saldo = value;
    }
    getSaldo(){
        return this.#saldo
    }
}

const contaTeste = new Conta();
contaTeste.agencia = 'test';
// contaTeste.#saldo = 0 nao da pra manipular assim é necessário ter setters e getters
contaTeste.setSaldo(123);
console.log(contaTeste)
console.log(contaTeste.getSaldo());

