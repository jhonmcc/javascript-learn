import { Conta } from "./9-heranca.js"

export class ContaCorrente extends Conta {
    constructor(saldoInicial, nome, agencia){
        super(saldoInicial, nome, agencia)
    }

    // realizando sobreescrita do metodo sacar herdado pelo obj Conta
    sacar(valor){
        let taxa = 0.5
        let valorReal = valor + 2;
        if (this._saldo >= valor){
            this._saldo -= valorReal
            return valor
        }
    }
}

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, nome, agencia){
        super(saldoInicial, nome, agencia)
    }

    // é possível criar metodos a partir da chamada do super da herança de outra classe
    print_msg(){
        super.hello_super()
        console.log('foi chamado o metodo de teste pelo super')
    }
}


const corrente = new ContaCorrente(0, 'Corrente', 123)
const poupanca = new ContaPoupanca(0, 'Poupanca', 321)
poupanca.print_msg() // por algum motivo ele também esta chamando a interaçao do arquivo de herança tomar cuidado para nao deixar passar nada batido
corrente.depositar(100)
corrente.sacar(90)

console.log(poupanca)
console.log(corrente)