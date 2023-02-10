import { Model , DataTypes } from "sequelize";

import {sequelize} from '../instances/mysql'

export interface FuncionarioInstance extends Model {

    codFunc: number,
    nome: string,
    cpf: String,
    telefone: number,
    email: string,
    logadouro: string,
    cargo: string,
    password: string
}

export const Funcionario = sequelize.define<FuncionarioInstance>("Funcionario,",{
    codFunc:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    cpf:{
        type:DataTypes.STRING
    },
    telefone:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    logadouro:{
        type:DataTypes.STRING
    },
    cargo:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},{
    tableName:'tbFuncionario',
    timestamps:false
}
)