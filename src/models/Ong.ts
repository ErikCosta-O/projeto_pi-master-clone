import { StringifyOptions } from "querystring";
import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface OngInstance extends Model{
    codOng: number,
    nome: string,
    email: string,
    tel: number,
    cnpj: number,
    endereco: string,
    categoria: string,
    descricao: string,
    webSite: string,
    redeSocial: string,
    codFunc: number,
    codUsuario: number
}

export const Ong = sequelize.define<OngInstance>("Ong,",{
    cod:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    tel:{
        type:DataTypes.INTEGER
    },
    cnpj:{
        type:DataTypes.INTEGER
    },
    endereco:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.STRING
    },
    descricao:{
        type:DataTypes.STRING
    },
    webSite:{
        type:DataTypes.STRING
    },
    redeSocial:{
        type:DataTypes.STRING
    },
    codFunc:{
        type:DataTypes.INTEGER
    },
    codUsuario:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'tbONG',
    timestamps: false
})