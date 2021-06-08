export class Conta{
    constructor(saldoInicial, nome, agencia){
        this._saldo = saldoInicial
        this._nome = nome
        this._agencia = agencia
        if (this.constructor == Conta){
            console.log('voce nao deveria instanciar direto de Conta')
            return
        }
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        // taxa = 1.1 * valor
        if (this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if (valor <= 0){
            return
        }
        this._saldo += valor
    }
}

export class ContaCorrente extends Conta {
    constructor(saldoInicial, nome, agencia){
        super(saldoInicial, nome, agencia)
    }
}

// para esse caso a classe Conta é uma classe pai a ideia é restringir apenas ao instanciamento das classes filho
const Corrente = new ContaCorrente(100, 'corrente', 123)
console.log(Corrente)
const conta = new Conta(10, 'conta', 123)
console.log(conta)


