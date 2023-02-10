import { Model,DataTypes } from "sequelize"

import {sequelize} from '../instances/mysql'


export interface ContatoInstance extends Model{

    codContato: number,
    nome: string,
    email: string,
    mensagem: number,
}

export const Contato = sequelize.define<ContatoInstance>("Contato,",{

    codContato:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    },
    email:{     
        type: DataTypes.STRING
    },    
    mensagem:{
        type: DataTypes.STRING
    }
},
{
    tableName: "tbcontato",
    timestamps:false
})