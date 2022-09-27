import { BrowserRouter, Routes, Route } from 'react-router-dom'

import JogoAdm from './pages/Admin/cadastrarjogoAdm';
import DeletarJogo from './pages/Admin/deletarjogoAdm'
import AdminHome from './pages/Admin/homeAdm';
import LoginAdm from './pages/Admin/loginAdm'
import LandingAdm from './pages/Admin/landingAdm'
import EditJogo from './pages/Admin/editarjogoAdm'
import EsqueceusenhaAdm from './pages/Admin/esqueceusenhaAdm'
import PesquisarjogoAdm from './pages/Admin/pesquisarjogoAdm'

import MinhaArea from './pages/User/interfaceUser/minhaArea';
import NotificacoesUser from './pages/User/interfaceUser/notificacoesUser'
import SegurancaUser from './pages/User/interfaceUser/segurancaUser';
import Landing from './pages/User/landingUser'
import LandinglogadoUser from './pages/User/landinglogadoUser'
import Login1 from './pages/User/loginUser/login001'
import Login2 from './pages/User/loginUser/login002'
import Login3 from './pages/User/loginUser/login003'
import Login4 from './pages/User/loginUser/login004'
import TelaUser from './pages/User/telaUser'
import TelajogoUser from './pages/User/telajogoUser'
import CadastroUser from './pages/User/cadastroUser'



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Admin/loginAdm' element={<LoginAdm />} />
                <Route path='/Admin/cadastr5arJogoAdm' element={<JogoAdm />} />
                <Route path='/Admin/deletarjogoAdm' element={<DeletarJogo/>} />
                <Route path='/Admin/editarjogoAdm' element={<EditJogo/>} />
                <Route path='/Admin/homeAdm' element={<AdminHome/>} />
                <Route path='/Admin/landignAdm' element={<LandingAdm/>} />
                <Route path='/Admin/esqueceusenhaAdm' element={<EsqueceusenhaAdm />} /> 
                <Route path='/Admin/pesquisarjogoAdm' element={<PesquisarjogoAdm />} />
                <Route path='/Admin/interfaceUser/segurancaUser' element={<SegurancaUser />} /> 
                <Route path='/Admin/telajogoUser' element={<TelajogoUser />} /> 
                <Route path='/Admin/landingUser' element={<Landing />} />
                <Route path='/Admin/landinglogadoUser' element={<LandinglogadoUser />} />

                <Route path='/' element={<TelaUser />} />
                <Route path='/User/Usercadastro' element={<CadastroUser />} />
                <Route path='/user/loginUser/login001' element={<Login1/>} />
                <Route path='/user/loginUser/login002' element={<Login2/>} />
                <Route path='/user/loginUser/login003' element={<Login3/>} />
                <Route path='/user/loginUser/login004' element={<Login4/>} />
                <Route path='/User/interfaceUser/notificacoesUser' element={<NotificacoesUser />} /> 
                <Route path='/User/interfaceUser/minhaArea' element={<MinhaArea />} />
                <Route path='/User/interfaceUser/segurancaUser' element={<SegurancaUser />} /> 
                <Route path='/User/telajogoUser' element={<TelajogoUser />} /> 
                <Route path='/User/landingUser' element={<Landing />} />
                <Route path='/User/landinglogadoUser' element={<LandinglogadoUser />} />

            </Routes>
        </BrowserRouter>
    )
}