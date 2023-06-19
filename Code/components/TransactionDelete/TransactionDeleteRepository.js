const db = require ('../../connect');

exports.TransactionDelete = async (id,productname) => {
    await db.connection.execute("Delete from Transaction where id = ? and productname = ?", [id,productname]);
};