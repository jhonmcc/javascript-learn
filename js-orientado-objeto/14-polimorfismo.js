export class Funcionario{
    constructor(nome, salario){
        this._nome = nome
        this._salario = salario
        this._senha
    }

    get salario(){
        return this._salario
    }

    get senha(){
        return this._senha
    }

    cadastrarSenha(senha){
        this._senha = senha
    }
}

export class Gerente extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }
}

export class Diretor extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }
}

export class Autenticacao{
    static login(funcionario, senha){
        return funcionario.senha == senha
    }
}


const gerente = new Gerente('G1', 321)
console.log(gerente)
let auth = Autenticacao.login(gerente, 123)
console.log(auth)
gerente.cadastrarSenha(123)
console.log(gerente)
auth = Autenticacao.login(gerente, 123)
console.log(auth)

const diretor = new Diretor('D1', 321)
console.log(diretor)
diretor.cadastrarSenha(123)
console.log(diretor)
