salariobase = parseFloat(prompt("Insira o seu salário base: ")) 
gratificacao = 50 
imposto = (salariobase * 0.10) 
salarioreceber = (salariobase + gratificacao) - imposto 
document.write("O seu salário a receber é: ", salarioreceber) 