num1 = parseInt(prompt("Digite uma nota: "))
num2 = parseInt(prompt("Digite uma nota: "))
num3 = parseInt(prompt("Digite uma nota: "))
peso1 = 2
peso2 = 3

media = ((num1 * peso1) + (num2 * peso2) + (num3 * peso2)) / (peso1 + peso2 + peso2)
document.write("A media destes notas é :",media)