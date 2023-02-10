import { Model,DataTypes } from "sequelize"

import {sequelize} from '../instances/mysql'


export interface UsuarioInstance extends Model{


    nome: string,
    email: string,
    password: number,
    cpf: number,
    telefone: number,
    experiencia: string,
    redeSocial: string,
    codFunc: number,
}

export const Usuario = sequelize.define<UsuarioInstance>("Usuario,",{
    nome:{
        type: DataTypes.INTEGER
    },
    email:{     
        type: DataTypes.STRING
    },    
    password:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.NUMBER
    },
    telefone:{
        type: DataTypes.NUMBER
    },
    experiencia:{
        type: DataTypes.STRING
    },
    redeSocial:{
        type: DataTypes.STRING
    },
    codFunc:{
        type: DataTypes.NUMBER
    
    }
},
{
    tableName: "tbUsuario",
    timestamps:false
})