const db = require ('../../connect');

exports.UpdateProduct = async (id,name,price,category,description) => {
    await db.connection.execute("Update products set name = ?, price = ?, category = ?, description = ? where id = ?", [name,price,category,description,id]);
};