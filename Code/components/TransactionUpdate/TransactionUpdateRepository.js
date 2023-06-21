const db = require ('../../connect');

exports.TransactionUpdate = async (id,producttype,productname,quantity,customerid,customername,datepurchase,price) => {
    console.log("meow",id,producttype,productname,quantity,customerid,customername,datepurchase,price)
    await db.connection.execute("Update transaction set producttype = ?, productname = ?,quantity = ?,customerid = ?, customername = ?, datepurchase = ?, price = ? where id = ?", [producttype,productname,quantity,customerid,customername,datepurchase,price,id]);
};