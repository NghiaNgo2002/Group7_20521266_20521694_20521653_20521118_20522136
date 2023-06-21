const TransactionUpdateRepository = require("./TransactionUpdateRepository");

exports.Update = () => {
    return TransactionUpdateRepository.Update();
};

exports.TransactionUpdate = async (id,productname,producttype,quantity,customerid,customername,datepurchase,price) => {
    await TransactionUpdateRepository.TransactionUpdate(id,producttype,productname,quantity,customerid,customername,datepurchase,price);
};