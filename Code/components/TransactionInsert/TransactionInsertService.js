const TransactionInsertRepository = require("./TransactionInsertRepository");

exports.Insert = () => {
    return TransactionInsertRepository.Insert();
};

exports.TransactionInsert = async (id,producttype,productname,quantity,customerid,customername,datepurchase,price) => {
    await TransactionInsertRepository.TransactionInsert(id,producttype,productname,quantity,customerid,customername,datepurchase,price);
};