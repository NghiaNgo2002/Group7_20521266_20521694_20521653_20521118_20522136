const db = require ('../../connect');

exports.TransactionDelete = async (id) => {
    await db.connection.execute("Delete from transaction where id = ?", [id]);
};