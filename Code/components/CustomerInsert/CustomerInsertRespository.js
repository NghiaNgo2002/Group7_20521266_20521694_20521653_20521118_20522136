const db = require ('../../connect');

exports.CustomerInsert = async (id,name,phone,address,datepurchase) => {
    await db.connection.execute("Insert into customer (`id`,`name`,`phone`,`address`,`datepurchase`) values (?,?,?,?,?)",[id,name,phone,address,datepurchase]);
};