// proposta de encapsuamento das propiedades utilizando #

class Conta{
    agencia;
    #saldo;

    _metodoPrivado(){
        // é possível criar também metodos privados colocando o _ (underline)
        return true
    }

    setSaldo(value){
        this.#saldo = value;
    }
    getSaldo(){
        return this.#saldo
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(value){
        this.#saldo = value;
    }
}

const contaTeste = new Conta();
contaTeste.agencia = 'test';
// contaTeste.#saldo = 0 nao da pra manipular assim é necessário ter setters e getters
contaTeste.setSaldo(123);
console.log(contaTeste)
console.log('Saldo: ', contaTeste.getSaldo());

// testando getters e setters
const conta2 = new Conta();
conta2.agencia = "ag 2";
conta2.saldo = 321
console.log(conta2);
console.log('Saldo: ', conta2.saldo)

