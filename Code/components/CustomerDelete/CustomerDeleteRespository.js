const db = require ('../../connect');

exports.CustomerDelete = async (id,name) => {
    await db.connection.execute("Delete from customer where id = ? ",[id]);
};