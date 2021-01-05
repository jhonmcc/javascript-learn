// aqui podemos importar um modulo ou classe de um outro arquivo, tudo irá depender da estrutura que irá utilizar para o seu programa

// é possível criar uma classe no proprio arquivo e interagir com ele
class Carro {
    cor;
    ano;
    renavam;
}

// criamos uma nova instancia da classe
const fusca = new Carro();
fusca.cor = 'azul';
fusca.ano = 1990;
fusca.renavam = 'asdf1324qwer1';

console.log(fusca);
// o uso do ; nao é obrigatorio, é mais por costume alem de que trabalhamos com varias linguagens de programação