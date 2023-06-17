const db = require ('../../connect');

exports.CustomerUpdate = async (id,name,phone,address,datepurchase) => {
    await db.connection.execute("Update customer set name = ?, phone = ?, address = ?, datepurchase = ? where id = ?", [name,phone,address,datepurchase,id]);
};