const TransactionRepository = require("./TransactionRepository");

exports.getAll = () => {
    return TransactionRepository.getAll();
};
exports.filter = (id) => {
    return TransactionRepository.filter(id);
};