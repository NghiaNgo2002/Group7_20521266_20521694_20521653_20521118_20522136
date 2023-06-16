const db = require ('../../connect');

exports.EmployeeInsert = async (id,name,phone,address) => {
    await db.connection.execute("Insert into employee (`id`,`name`,`phone`,`address`) values (?,?,?,?)",[id,name,phone,address]);
};