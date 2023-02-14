import { Router } from 'express'
import {Request, Response} from 'express'

import * as homeController from '../controllers/HomeController'
import * as userController from '../controllers/userController'
import * as ongController from '../controllers/ongController'

const router = Router()

router.get('/',homeController.home)

router.get('/perfil',homeController.perfil)

router.get('/sobre',homeController.sobre)

router.get('/vagas',homeController.vagas)

router.get('/loja',homeController.loja)

router.get('/contato',homeController.contato)

router.get('/vaga', homeController.vaga)

router.get('/confirma', homeController.confirma)

router.get('/404',homeController.error)

router.get('/login',ongController.login)

router.get('/criarContaOng',ongController.contaOng)

router.get('/contaOng',ongController.contaOng)

router.get('/contaUsuario',userController.contaUsuario)

router.get('/criarContaUsuario',userController.contaUsuario)

router.get('/login',userController.login)

export default router