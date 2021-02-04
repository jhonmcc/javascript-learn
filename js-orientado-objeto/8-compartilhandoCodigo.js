export class Conta {
    #saldo
    // o cliente pode assumir um objeto de classe cliente
    #cliente 
    #agencia

    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial
        this.#cliente = cliente
        this.#agencia = agencia
    }

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if (valor <= 0){
            return
        }
        this.#saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

    obterDados(){
        return [this.#saldo, this.#cliente, this.#agencia]
    }
}

// usando a classe é possível utilizar a mesma em outros arquivos
const contaCorrente = new Conta(100, 'Cliente Corrente', 123)
contaCorrente.depositar(50)
console.log(contaCorrente.obterDados())

const contaPoupanca = new Conta(100, 'Cliente Poupanca', 123)
contaPoupanca.depositar(50)
contaPoupanca.sacar(100)
console.log(contaPoupanca.obterDados())
