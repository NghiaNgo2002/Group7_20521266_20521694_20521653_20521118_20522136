const TransactionDeleteRepository = require("./TransactionDeleteRepository");

exports.Delete = () => {
    return TransactionDeleteRepository.Delete();
};

exports.TransactionDelete = async (id,productname) => {
    await TransactionDeleteRepository.TransactionDelete(id,productname);
};