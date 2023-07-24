// Fazer um menu de exercícios utilizando exemplos dado em aula
//  (6 exercícios dentro de funções, e incluir nome ou algo de sua 
// preferência para criar um objeto e manipulá-lo)

import promptSync from "prompt-sync"
// comando de importacao (1)


import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
// comando de import especifico (2)



let prompt = promptSync()
// recebimento de dados 

let resposta;
// variavel para guardar resposta




do  {  //faca
    resposta = prompt ("Digite um numero de 1 a 3 para escolher exercicios: ")
   // capturar reposta do usuario e salva na variavel resposta

    switch (resposta) { //analisa varuiavel resposta 
    case "1" :
    exercicio1() 
    break;

    case "2":
    exercicio2()
     break;

    case "3" :
    exercicio3()
    break;

    case "sair" :
        console.log("voce escolheu sair")
    break;

    default : //caso o usuario nao digite o previsto
    console.log ("voce nao digitou um numero previsto, digite um exercicio de 1 a 3 ou sair")
    break;
                    

    }



} while (resposta != "sair") //enquanto essa condicao for verdadeira














// do {

//      console.log("Bem vindo ao menu de exercicios!")

//      resposta = prompt("Digite um numero de 1 a 6, ")
    
// } while (condition);