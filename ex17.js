salario = parseFloat(prompt("Insira o seu salario: ")) 
percentual = prompt("Insira o percentual: ") 

percentual2 = (salario) * (percentual/100) 
novosalario = (salario + percentual2) 
document.write("O seu novo salário é de:", novosalario) 