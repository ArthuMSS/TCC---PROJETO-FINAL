import { adminLogin } from "../repository/adminloginRepository";

import { Router } from 'express';
const server = Router();

server.post('/admin/login', async (req, resp) => {
    try {
    const {email, senha} = req.body;
    const log = await adminLogin(email, senha)
    resp.send(log)
    } catch (err){
        resp.status(400).send({
            erro: 'Ocorreu um erro ao efetuar o login'
        });
    }
})

export default server;