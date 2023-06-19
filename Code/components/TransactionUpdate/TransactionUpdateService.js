const TransactionUpdateRepository = require("./TransactionUpdateRepository");

exports.Update = () => {
    return TransactionUpdateRepository.Update();
};

exports.TransactionUpdate = async (id,productname,producttype,datepurchase,price) => {
    await TransactionUpdateRepository.TransactionUpdate(id,productname,producttype,datepurchase,price);
};