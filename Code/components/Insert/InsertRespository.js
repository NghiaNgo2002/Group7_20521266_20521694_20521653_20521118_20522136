const db = require ('../../connect');

exports.InsertProduct = async (type,id,name,price,category,description) => {
    await db.connection.execute("Insert into Products (`type`,`id`,`name`,`price`,`category`,`description`) values (?,?,?,?,?,?)",[type,id,name,price,category,description]);
};