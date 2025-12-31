class Elemento {
    dado: number;
    prioridade: number;
    constructor(dado: number, prioridade: 1 | 2 | 3 | 4 | 5) {
        this.dado = dado;
        this.prioridade = prioridade;
    }
}

class FilaComPrioridade {
    private armazenamento: Array<Elemento>;
    private capacidade: number;

    constructor(capacidade: number) {
        this.armazenamento = [];
        this.capacidade = capacidade;
    }

    adicionar(num: number, prioridade: 1 | 2 | 3 | 4 | 5): void {
        //caso a fila esteja vazia, os ponteiros f e o b ficam com 0, para marcar o inicio do Array
        if (this.estaVazia()) {
            this.armazenamento.push(new Elemento(num, prioridade));
            return;
        }
        //caso esteja cheia
        else if (this.estaCheia()) {
            return console.log("fila cheia");
        }
        // caso incompleta 
        const novoElemento: Elemento = new Elemento(num, prioridade);
        //flag para controle do loop
        let inserido: boolean = false
        for (let i: number = 0; i < this.armazenamento.length; i += 1) {
            if (novoElemento.prioridade > this.armazenamento[i]!.prioridade) {
                this.armazenamento.splice(i, 0, novoElemento)
                inserido = true;
                break;
            }
        }
        if (inserido === false){
            this.armazenamento.push(novoElemento);
        }
        return;
    }

    remover() {
        this.armazenamento.shift();
    }

    tamanho(): number {
        return this.armazenamento.length;
    }

    exibirFila(): void {
        console.log(this.armazenamento);
    }


    estaCheia(): boolean {
        if (this.armazenamento.length === this.capacidade) {
            return true;
        }
        return false;
    }

    estaVazia() {
        if (this.armazenamento.length === 0) {
            return true;
        }
        return false;
    }

    esvaziaFila(){
        this.armazenamento = [];
    }


    getCapacidade() {
        return console.log(`Capacidade: ${this.capacidade}`);
    }

    getEspacoDisponivel() {
        return console.log(`Espaço disponível: ${this.capacidade - this.tamanho()}`);
    }

    getProximoExcluir() {
        return console.log(`Próximo elemento a ser excluido: ${this.armazenamento[0]}`)}
 
}
// Teste de funcionamento

let f1 = new FilaComPrioridade(5);
f1.adicionar(5, 5);
f1.adicionar(4, 1);
f1.adicionar(3, 3);

f1.exibirFila()
f1.estaCheia();
f1.getCapacidade();
f1.getEspacoDisponivel();
f1.remover();
f1.exibirFila();
f1.esvaziaFila();
f1.exibirFila();