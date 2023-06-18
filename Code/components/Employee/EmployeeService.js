const EmployeeRepository = require("./EmployeeRepository");

exports.getAll = () => {
    return EmployeeRepository.getAll();
};
exports.filter = (id) => {
    return EmployeeRepository.filter(id);
};