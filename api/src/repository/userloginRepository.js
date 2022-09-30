import { con } from './connection.js'

export async function userLogin(email, senha) {
    const comando = 
    `SELECT id_usuario       id,
            ds_email         email,
            nm_usuario       nome,
            nr_cpf           cpf,
            dt_nascimento    nascimento
    FROM TB_USUARIO
    WHERE ds_email          = ?
    AND   ds_senha          = ? `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}