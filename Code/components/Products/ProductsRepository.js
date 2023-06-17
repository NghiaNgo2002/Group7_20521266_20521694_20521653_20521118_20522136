const db = require ('../../connect');

exports.getAll = async () => {
  const result = await db.connection.execute("SELECT * FROM Products");
  return result[0];
};
exports.filter = async (name) => {
  const result = await db.connection.execute('SELECT * FROM Products WHERE name LIKE ?', [`%${name}%`]);
  console.log(name,result);
  return result[0];
};