// adicionando comportamento a classe também conhecidos como metodos da classe

class Carro{
    cor;
    ano;
    acao;

    liga_desliga(valor){
        this.acao = valor;
    }

    acelera(){
        if (this.acao == true){
            console.log('carro ligado');
            console.log('vruummm');
        }
        else{
            console.log('o carro esta desligado');
        }
    }
}

const fusca = new Carro();
fusca.cor = 'amarelo';
fusca.ano = 1990;
fusca.acelera();

fusca.liga_desliga(true);
fusca.acelera();