const databaseAPI = require("./database");
const passwordManager = require("./passwordManager");


(async () => {

    ////console.log(await databaseAPI.login("test2","123"));
    //console.log(await databaseAPI.login("20.007.466-1","qwerty"));
    //console.log( await passwordManager.getEncriptedPassword("123"));
    //console.log( await passwordManager.validatePassword("qwerty","$2a$10$Dx0wXQ78jRTIR.nabExQv.tmAhL.Z.uRPo7yLbZxk3TOYzlTrTkWi"));
    const rut='20.007.466-1';
    const query = await databaseAPI.client.query(`select * from patient where rut=$1 `,[rut]);
    const result = query['rows']; //[0]['state']
    console.log( await result);
}
)()


