Lista_aprovados_reprovados = []

print ("___________________________________________________________________")

for x in range (5):
    
    print("SEU BOLETIM UVV-ON")
    
    nome = str(input('Digite o seu nome : '))
    mat = int(input('Informe sua Matricula: '))
    
    print("----------")
    print("PREENCHA NOS CAMPOS ABAIXO A NOTA OBTIDA EM...")
    

    
    a1 = float (input ("AOP1:"))
    if a1 >= 0 and a1 <= 1:
        a2 = float (input("AOP2:"))
        
    if a2 >= 0 and a2 <= 2:
        a3 = float (input("AOP3:"))
        
    if a3 >= 0 and a3 <= 1:
        pr = float (input("PROVA REGULAR:"))
        
    if pr >= 0 and pr <= 6:
        print("----------")
        
      
    soma_do_modulo = a1 + a2 + a3 + pr
    print ("SUAS NOTAS NESTE MODULO FORAM :",a1,"_",a2,"_",a3,"_",pr)
    print ("TOTAL :",soma_do_modulo)
      
    print("----------")
      
    if soma_do_modulo < 3:
        Lista_aprovados_reprovados.append(0)
        print ("STATUS DO ALUNO: Reprovado(a) Direto!","/",nome,"/",mat)
        print ("______________________________________________________________") 
         
    elif soma_do_modulo >= 7 and soma_do_modulo <=10:
       Lista_aprovados_reprovados.append(1)
       print("STATUS DO ALUNO: Aprovado!","/",nome,"/",mat)
       print ("_______________________________________________________________")
        
    else:
        print ("STATUS DO ALUNO: Prova de Recuperação")
        print("----------")
        
        print ("POR FAVOR DIGITE A NOTA DA...")
        rpr = float (input("Prova de Recuperação:"))
            
        print("----------")
            
        print ("SUAS NOTAS NESTE MODULO FORAM :",a1,"_",a2,"_",a3,"_",pr,"_",rpr)
        media_do_modulo = (soma_do_modulo + rpr) /2
        print ("TOTAL :",media_do_modulo)
        if media_do_modulo >= 5 and rpr <= 10:
            Lista_aprovados_reprovados.append(1)
            print("----------")
            print ("STATUS DO ALUNO: Aprovado!","/",nome,"/",mat)
            print ("_______________________________________________________________")
                
        else:
            Lista_aprovados_reprovados.append(0)
            print("----------")
            print ("STATUS DO ALUNO: Reprovado(a)","/",nome,"/",mat)
            print ("_______________________________________________________________")
    
total = len(Lista_aprovados_reprovados)

contagem_1 = Lista_aprovados_reprovados.count(1)
contagem_0 = Lista_aprovados_reprovados.count(0)

porcentagem_1 = (contagem_1 / total) * 100
porcentagem_0 = (contagem_0 / total) * 100

print ("PERCENTUAL DE APROVAÇÃO")
print(f"{porcentagem_1}% Dos alunos foram Aprovados")
print(f"{porcentagem_0}% Dos alunos foram Reprovados")
print ("_______________________________________________________________")

#FAZER O RETORNO CASO SEJA DIGITADO UM NUMERO NAO CORRESPONDENTE