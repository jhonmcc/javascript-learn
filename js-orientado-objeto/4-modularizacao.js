// para usar modularizacao teras que dar um npm init para criar o arquivo package.json e acrescentar o type
// veja o arquivo de referencia package.json na linha após o campo "license" acrescente "type": "module",
// utilize o npm init -y caso queira pular os steps de definicao do projeto

// importando um modulo
import { Cliente } from "./4.1-moduloCliente.js";

// utilizando o import
const testCliente = new Cliente();

testCliente.nome = "Teste Nome";
testCliente.idade = 99;
testCliente.saudacao();

// node 4-modularizacao.js para realizar o teste 