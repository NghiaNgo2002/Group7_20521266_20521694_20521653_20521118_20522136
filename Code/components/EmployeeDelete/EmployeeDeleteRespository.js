const db = require ('../../connect');

exports.EmployeeDelete = async (id,name) => {
    await db.connection.execute("Delete from employee where id = ? and name = ?", [id,name]);
};