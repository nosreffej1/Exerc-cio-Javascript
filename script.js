let nameOlder = prompt("Digite o nome da pessoa mais velha:")
let ageOlder = prompt(nameOlder + " tem quantos anos?")

let nameYounger = prompt("Digite o nome da pessoa mais nova:")
let ageYounger = prompt(nameYounger + " tem quantos anos?")

// cálculo de diferença de idade

let ageDif = ageOlder - ageYounger

// 

alert("A pessoa mais velha é: " + nameOlder + " com " + ageOlder + " anos!")
alert("A pessoa mais nova é: " + nameYounger + " com " + ageYounger + " anos!")

alert("A diferença de idade entre os dois é de: " + ageDif + " anos.")


/*  RESOLUÇÃO DO PROFESSOR

let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")
let youngerPersonName = prompt("Digite o nome da pessoa mais nova")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")
let ageDifference = olderPersonAge - youngerPersonAge
alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\nDiferença de idade: " + ageDifference
)

*/