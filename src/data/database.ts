import { Sequelize } from "sequelize";

const sequelize= new Sequelize('mysql://root:root@localhost:3306/mystore')

if(sequelize){
    console.log('conexão com o banco de dados estabelecida')
}

export default sequelize;
