import { con } from './connection.js'

export async function adminLogin (email, senha) {
    const comando = 
  ` SELECT  id_admin     id,
            nm_admin     nome,
            ds_email     email
    FROM TB_ADMIN
    WHERE ds_email      = ?
    AND   ds_senha      = ? `

    const [linhas] = con.query(comando, [email, senha])
    return linhas[0];
}