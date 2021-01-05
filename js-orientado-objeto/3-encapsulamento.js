// proposta de encapsuamento das propiedades utilizando #

class Conta{
    var1;
    #saldo;

    setSaldo(value){
        this.#saldo = value;
    }
    getSaldo(){
        return this.#saldo
    }
}

const obj1 = new Conta();
obj1.var1 = 'test';
// obj1.#saldo = 'private' nao da pra manipular assim é necessário ter setters e getters
obj1.setSaldo(123);
console.log(obj1)
console.log(obj1.getSaldo());
