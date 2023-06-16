const EmployeeRepository = require("./EmployeeRepository");

exports.getAll = () => {
    return EmployeeRepository.getAll();
};