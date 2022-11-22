class Aluno { // Classe Aluno desenvolvida em sala de aula
    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    media;
    
    constructor(nome, matricula, n1, n2, n3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = n1;
        this.nota2 = n2;
        this.nota3 = n3;
    }
    
    exibeInfo() {
    return `Aluno: ${this.nome} - mat: ${this.matricula}
    Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
    Média:${this.calculaMedia()} 
        `;
    
    }
    
    calculaMedia() {
    return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
    
}

// Capturando variáveis nota1, nota2, nota3, nome, matricula e botões

let alunoNome = document.querySelector("#nome")
let alunoMatricula = document.querySelector("#matricula")
let alunoNota1 = document.querySelector("#nota1")
console.log(alunoNota1, alunoNome)
let alunoNota2 = document.querySelector("#nota2")
let alunoNota3= document.querySelector("#nota3")
let calcButton = document.querySelector('#calc-button')
let cleanerButton = document.querySelector('#cleaner-button')
let toTable = document.querySelector("#build-table")

calcButton.addEventListener('click', function(event){  // Ler click no botão Confirmar
    event.preventDefault()
    console.log('Atribuindo valores...')
// Capturando o valor dos inputs e convertendo em Float para armazenar no objeto
    let nome = (alunoNome.value)
    let matricula = (alunoMatricula.value)
    let nota1 = parseFloat(alunoNota1.value)
    let nota2 = parseFloat(alunoNota2.value)
    let nota3 = parseFloat(alunoNota3.value)
    let aluno1 = new Aluno(nome, matricula, nota1, nota2, nota3)
    let media = (aluno1.calculaMedia(nota1, nota2, nota3))
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    // Calculando média...
    console.log("Media: " + media)
    console.log("Construindo tabela...") 
    toTable.innerHTML += // Método repsonsável por construir a tabela abaixo do formulário.
    `<tr>
    <td>${nome}</td>
    <td>${matricula}</td>
    <td>${nota1}</td>
    <td>${nota2}</td>
    <td>${nota3}</td>
    <td>${media}</td>`
})

cleanerButton.addEventListener('click', function(){ // Método para limpar o formulário. OBS: Esse método NÃO apaga as tabelas.
    nome.value = ""
    matricula.value = ""
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
})
