const db = require ('../../connect');

exports.DeleteProduct = async (id,name) => {
    await db.connection.execute("Delete from Products where id = ? ",[id]);
};