const db = require ('../../connect');

exports.getAll = async () => {
  const result = await db.connection.execute("SELECT * FROM Employee");
  return result[0];
};