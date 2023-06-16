const db = require ('../../connect');

exports.EmployeeUpdate = async (id,name,address,phone) => {
    await db.connection.execute("Update employee set name = ?, address = ?, phone = ? where id = ?", [id,name,address,phone]);
};