const TransactionDeleteRepository = require("./TransactionDeleteRepository");

exports.Delete = () => {
    return TransactionDeleteRepository.Delete();
};

exports.TransactionDelete = async (id) => {
    await TransactionDeleteRepository.TransactionDelete(id);
};