# Fila com Prioridade em TypeScript 🚀

Este repositório contém a implementação de uma **Fila com Prioridade** desenvolvida como atividade prática.

## 📚 Informações Acadêmicas

* **Aluno:** Vitor Lopes
* **Disciplina:** Estrutura de Dados
* **Professor:** Jonathas Jivago
* **Linguagem:** TypeScript
* **Ambiente:** Node.js

---

## ⚙️ Lógica de Implementação

O projeto utiliza a estratégia de **Array Ordenado** (Sorted Array) para gerenciar a prioridade:

1.  **Inserção (`adicionar`):** Ao adicionar um elemento, o algoritmo percorre a fila atual. Se encontrar um elemento com prioridade *menor* (número maior) do que o novo elemento, o novo item "fura a fila" e assume aquela posição (usando `splice`). Caso contrário, ele é adicionado ao final.
2.  **Remoção (`remover`):** Como a fila está sempre ordenada, a remoção é simples: retira-se o primeiro elemento do array (`shift`), que garantidamente é o de maior prioridade.
3.  **Prioridades:** O sistema aceita níveis de prioridade de **1 a 5**, onde **1 é a maior prioridade** e **5 é a menor**.

### Classes Principais
* `Elemento`: Representa o item com um dado (`number`) e sua prioridade.
* `FilaComPrioridade`: Gerencia o array, controla a capacidade máxima e a lógica de inserção ordenada.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado.
* NPM (Node Package Manager).

### Execução

Para rodar o projeto diretamente, recomenda-se o uso do executor **`tsx`** (mais rápido e compatível com versões modernas do Node) ou o `ts-node`.

1. Abra o terminal na **raiz do projeto** (`~/Atividades/fila-com-prioridade`).

2. Execute o comando:

```bash
npx tsx src/fila-com-prioridade.ts
