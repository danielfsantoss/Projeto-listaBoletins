# Lista de Boletins de Alunos

Eis aqui um projeto de uma atividade passada em sala de aula na disciplina Programação Web ministrada pelo professor Edkallenn Silva de Lima da Unipê-JP.  

## Resumo  

O projeto consiste em um formulário onde podem ser adicionados variáveis de um aluno, como nome, matrícula e notas. Esses dados serão utilizados para montar uma lista de boletins em forma de tabela.  

#### Funcionamento

* O algoritmo desenvolvido em JavaScript se encarregará de receber os valores, armazená-los em uma classe `Aluno` e em seguida calcular a média utilizando os atributos `nota1`, `nota2` e `nota3`.  
* Os demais atributos retornarão ao HTML utilizando DOM no JavaScript.  
* Será construída uma tabela informando **Nome**, **Matrícula** e **Média**.

## Observações

Durante a construção do projeto houveram algumas problemáticas em relação ao uso do DOM para retornar os valores da classe `Aluno` na tabela.  

Dentre os erros já reparados durante a construção, o que persistiu foi o triste problema do carregamento da página. 
 
Tentei utilizar formas diferentes de construção para o acionamento do botão que faria o cálculo, mas em todos os testes era necessário dar um F5 na página para carregar os novos valores da classe.  

Devido o fim do prazo para entrega da atividade, não foi possível realizar novas atualizações de reparo na aplicação, tendo de ser entregue dessa forma.

## Considerações Finais

Ainda com diversos problemas no desenvolvimento da aplicação e por mais simples que ela seja, tive uma oportunidade de atribuir novos conhecimentos e observar métodos diferentes para atingir um mesmo resultado, como por exemplo a manipulação de tabelas com DOM, sendo nesse projeto, o método `innerHTML` utilizado.
