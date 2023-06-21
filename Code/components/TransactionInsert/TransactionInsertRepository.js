const db = require ('../../connect');

exports.TransactionInsert = async (id,producttype,productname,quantity,customerid,customername,datepurchase,price) => {
    await db.connection.execute("Insert into Transaction (`id`,`producttype`,`productname`,`quantity`,`customerid`,`customername`,`datepurchase`,`price`) values (?,?,?,?,?,?,?,?)",[id,producttype,productname,quantity,customerid,customername,datepurchase,price]);
};