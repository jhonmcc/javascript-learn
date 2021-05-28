export class Conta{
    constructor(saldoInicial, nome, agencia){
        this._saldo = saldoInicial
        // this._cliente = cliente // seria uma instancia da classe cliente
        this._nome = nome
        this._agencia = agencia
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

    transferir(valor, conta){
        const saque = this.sacar(valor)
        conta.depositar(saque)
    }

    hello_super(){
        return 'chamado pelo metodo super'
    }
}

export class ContaCorrente extends Conta{
    static numContasCorrente = 0
    constructor(saldoInicial, nome, agencia){
    super(saldoInicial, nome, agencia) // super chama o contrutor da classe pai
    }
}

export class ContaPoupanca extends Conta{
    static numContasPoupanca = 0
    constructor(saldoInicial, nome, agencia){
        super(saldoInicial, nome, agencia) // super chama o contrutor da classe pai
    }
}


const corrente = new ContaCorrente(0, 'CCorrente', 123)
const poupanca = new ContaPoupanca(0, 'CPoupanca', 321)
poupanca.depositar(50)
poupanca.transferir(50, corrente)

console.log(poupanca)
console.log(corrente)