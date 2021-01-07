import { Cliente } from './4.1-moduloCliente.js';

class Conta{
    #saldo = 0;
    cliente;
    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
        }
        else{
            console.log('nao da para depositar esse valor');
        }
    }

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor;
        }
        else{
            console.log('saldo insuficiente');
        }
        
    }

    getSalto(){
        console.log(`Saldo atual: ${this.#saldo}`);
    }
}

// definindo obj Cliente
const cliTeste = new Cliente();
cliTeste.nome = 'Fulano';
cliTeste.idade = 22;

// definindo obj Conta
const contaTeste = new Conta();
console.log(contaTeste)
contaTeste.getSalto();
console.log('\n')

// atribuindo valores
contaTeste.cliente = cliTeste;
contaTeste.depositar(100);
console.log(contaTeste)
contaTeste.getSalto();
