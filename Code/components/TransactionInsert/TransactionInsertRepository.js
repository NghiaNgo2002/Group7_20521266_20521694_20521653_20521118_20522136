const db = require ('../../connect');

exports.TransactionInsert = async (id,productname) => {
    await db.connection.execute("Insert into Transaction (`id`,`producttype`,`productname`,`datepurchase`,`price`) values (?,?,?,?,?)",[id,producttype,datepurchase,price]);
};