const CustomerRepository = require("./CustomerRespository");

exports.getAll = () => {
    return CustomerRepository.getAll();
};