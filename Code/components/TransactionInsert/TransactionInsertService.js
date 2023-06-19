const TransactionInsertRepository = require("./TransactionInsertRepository");

exports.Insert = () => {
    return TransactionInsertRepository.Insert();
};

exports.TransactionInsert = async (id,productname,producttype,datepurchase,price) => {
    await TransactionInsertRepository.TransactionInsert(id,productname,producttype,datepurchase,price);
};