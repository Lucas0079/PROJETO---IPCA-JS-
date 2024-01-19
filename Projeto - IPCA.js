

let lista_salario_minimo = [
    {ano:2010,salario:510.00},
    {ano:2011, salario:545.00},
    {ano:2012, salario:622.00},
    {ano:2013, salario:678.00},
    {ano:2014, salario:724.00},
    {ano:2015, salario:788.00},
    {ano:2016, salario:880.00},
    {ano:2017, salario:937.00},
    {ano:2018, salario:954.00},
    {ano:2019, salario:998.00},
    {ano:2020, salario:1045.00}
]

let lista_IPCA = [
    {ano:2010, ipca:5.91},
    {ano:2011, ipca:6.50},
    {ano:2012, ipca:5.84},
    {ano:2013, ipca:5.91},
    {ano:2014, ipca:6.41},
    {ano:2015, ipca:10.67},
    {ano:2016, ipca:6.29},
    {ano:2017, ipca:2.95},
    {ano:2018, ipca:3.75},
    {ano:2019, ipca:4.31},
    {ano:2020,ipca:4.52}
]

import opcao from 'readline-sync';

console.log("1 - Listar histórico de salário mínimo");
console.log("2 - Listar histórico da taxa de IPCA(inflação)");
console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");


let input_opcao = Number(opcao.question("\nEscolha a opção que deseja: "));

if(input_opcao > 3  || input_opcao < 1){
    console.log("Valor inválido!")
}


if(input_opcao== 1 ){
    for(let i = 0; i < lista_salario_minimo.length;i++){
        let salario = lista_salario_minimo[i].salario;
        let ano = lista_salario_minimo[i].ano;
        console.log("\nAno: ".padEnd(45,".")+ano);
        console.log("Salário mínimo: ".padEnd(40,".")+"R$"+salario.toFixed(2).replace(".",","));
    }
}

else if(input_opcao == 2){
    for(let i = 0; i < lista_IPCA.length;i++){
         let ipca = lista_IPCA[i].ipca;
         let ano = lista_IPCA[i].ano;
         console.log("\nTaxa de inflação: ".padEnd(45,".")+ipca.toFixed(2).replace(".",",")+"%");
         console.log("Ano: ".padEnd(45,".")+ano);
    }
}

else if(input_opcao == 3){
    for(let i = 0; i < lista_IPCA.length && i < lista_salario_minimo.length;i++){
        let ipca = lista_IPCA[i].ipca;
        let salario = lista_salario_minimo[i].salario;
        let ano = lista_IPCA[i].ano;
        let salario_anterior = i > 0 ? lista_salario_minimo[i - 1].salario : 0 ;
        let subtracao = salario - salario_anterior;
        let taxa_crescimento = salario_anterior !== 0 ? (subtracao/salario_anterior)*100 : 0;
        console.log("\nAno: ".padEnd(51,".")+ano);
        console.log("Salário mínimo: ".padEnd(50,".")+"R$"+salario.toFixed(2).replace(".",","));
        console.log("Taxa de inflação: ".padEnd(50,".")+ipca.toFixed(2).replace(".",",")+"%");
        console.log("Taxa de crescimento salarial: ".padEnd(50,".")+taxa_crescimento.toFixed(2).replace(".",",")+"%")
    }
}
