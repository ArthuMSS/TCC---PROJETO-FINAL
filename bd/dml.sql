--- LOGIN DO USUÁRIO ---


-- Carga inicial login (usuário)
INSERT INTO TB_USUARIO (nm_usuario, ds_email, ds_senha)
     VALUES ('Clebin', 'Clebin@gmail.com.br', 'éoguaianases');


--- Efetuar login

SELECT id_usuario       id,
       ds_email         email,
       nm_usuario       nome,
       nr_cpf           cpf,
       dt_nascimento    nascimento
FROM TB_USUARIO
WHERE ds_email          ='Clebin@gmail.com.br'
AND   ds_senha          ='éoguaianases'

--- LOGIN DO ADMIN ---

-- carga inicial login (admin)

INSERT INTO TB_ADMIN (nm_admin, ds_email, ds_senha)
     VALUES    ('Arthur', 'admin@admin.com.br', 'admin1234');

-- Efetuar login

SELECT id_admin     id,
       nm_admin     nome,
       ds_email     email
FROM TB_ADMIN
WHERE ds_email      = 'admin@admin.com.br'
AND   ds_senha      =  'admin1234'