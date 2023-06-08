var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function salvarBanco(email, TotalPontos, fkUsuario) {
    console.log("ACESSEI O TESTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarBanco():", email, TotalPontos, fkUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativa (email, TotalPontos, idUsuario) VALUES ('${email}', '${TotalPontos}', '${fkUsuario}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarBanco
};

// function salvarBanco(email, TotalPontos) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucao = `
//         SELECT * FROM usuario WHERE email = '${email}' AND TotalPontos = '${TotalPontos}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// var database = require("../database/config");

// function buscarTentativaPorUsuario(idUsuario) {

//     instrucaoSql = `select * from tentativa where fk_usuario = ${idUsuario}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function cadastrar(idUsuario, descricao) {

//     instrucaoSql = `insert into (descricao, fk_usuario) aquario values (${descricao}, ${idUsuario})`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


// module.exports = {
//     buscarTentativaPorUsuario,
//     cadastrar
// }