import {DataSource} from "typeorm"
import {Test2} from "./entity/request"
import "reflect-metadata"
import config from "./config.json"

const AppDataSource = new DataSource({
    type: "mysql",
    host: config.database.ip,
    port: config.database.port,
    username: config.database.user,
    password: config.database.password,
    database: config.database.db_name,
    entities: [Test2],
    synchronize: true
})

AppDataSource.initialize().then(() => {
    // do something
    console.log("finish!")
}).catch((error) => console.log(error))
