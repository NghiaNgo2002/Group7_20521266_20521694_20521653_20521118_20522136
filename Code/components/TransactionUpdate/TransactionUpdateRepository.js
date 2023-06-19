const db = require ('../../connect');

exports.TransactionUpdate = async (id,productname) => {
    await db.connection.execute("Update customer set producttype = ?, productname = ?, datepurchase = ?, price = ? where id = ?", [producttype,productname,datepurchase,price,id]);
};