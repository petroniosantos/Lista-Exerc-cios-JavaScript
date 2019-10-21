salariobase = parseFloat(prompt("Insira o seu salario base: ")) 
gratificacao = (salariobase * 0.05) 
imposto = (salariobase * 0.07) 
salarioreceber = (salariobase + gratificacao) - imposto 
document.write("O seu salario sera de:", salarioreceber) 