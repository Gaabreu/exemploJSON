const fs = require("fs");

// SALVAR CONTATOS
if(process.argv[2] == "salvar" && process.argv.length === 5){
    let escrever = {Nome: process.argv[3] ,Email: process.argv[4]};
    
    
    fs.appendFile("pessoas.json", `${JSON.stringify(escrever)}\n`, function(erro,sucesso){
        if(erro){
            console.log("Erro ao escrever o arquivo. O erro foi: ");
            console.log(erro);
        }
        else{
            console.log("Arquivo escrito com sucesso");
        }
    });
}   
else{
    console.log("node cadastro.js salvar <nome> <email>")
}

// VER LISTA COMPLETA
if(process.argv[2]== "buscar-todos" && process.argv.length === 3){  
    fs.readFile("pessoas.json", function(erro, sucesso){
        if(erro){
            console.log("Ocorreu um erro. O erro foi: ");
            console.log(erro);
        }
        else{
            console.log(sucesso.toString());
            console.log("Os cadastros estão na tela");
        }
    })
} else {
    console.log("node cadastro.js buscar-todos")
}

//VER CONTATO ESPECIFICO
if(process.argv[2] == 'buscar' && process.argv.length === 4){

    fs.readFile('pessoas.json', function(erro, sucesso){
        if(erro){
            console.log('Ocorreu um erro. O erro foi: ')
            console.log(erro);
        } else {
            
        }
    })

} else {
    console.log("node cadastro.js buscar <nome>")
}
  