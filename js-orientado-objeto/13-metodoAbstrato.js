// a ideia do metodo abstrato é forçar durante o desenvolvimento a sobreescrever determinado metodo 
export class Conta{
    constructor(saldoInicial, nome, agencia){
        if (this.constructor == Conta){
            throw new Error('Instancia de Conta nao pode ser gerada ela apenas pode ser herdada.')
        }
        this._saldo = saldoInicial
        this._nome = nome
        this._agencia = agencia
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        // este metodo sera considerado abstrato lançando um throw quando chamado diretamente sem sobreescrita
        throw new Error('O metodo sacar da Classe Conta é abstrato e ele deve ser reescrito na classe herdada.')
    }

    _sacar(valor){
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

export class ContaSalario extends Conta {
    constructor(saldoInicial, nome, agencia){
        super(saldoInicial, nome, agencia)
    }
    // rode o arquivo antes de descomentar as linhas abaixo apos receber o erro descomente as linhas abaixo e rode novamente
    // sacar(valor){
    //     return this._sacar(valor)
    // }
}

// para esse caso a classe Conta é uma classe pai a ideia é restringir apenas ao instanciamento das classes filho
const salario = new ContaSalario(100, 'salario', 123)
salario.sacar(10)
console.log(salario)


