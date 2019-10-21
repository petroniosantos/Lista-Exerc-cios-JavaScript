var num1 = prompt("Informe o primeiro valor inteiro: ")
var num2 = prompt("Informe o segundo valor inteiro: ")

dividendo = num1
divisor = num2
quociente = dividendo/divisor
resto = dividendo%divisor

document.write("O dividendo é: ", dividendo, "<br/>")
document.write("O divisor é: " , divisor,"<br/>")
document.write("O quociente é: " , quociente,"<br/>")
document.write("E o resto é: " , resto)