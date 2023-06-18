const CustomerRepository = require("./CustomerRespository");

exports.getAll = () => {
    return CustomerRepository.getAll();
};
exports.filter = (id) => {
    return CustomerRepository.filter(id);
};