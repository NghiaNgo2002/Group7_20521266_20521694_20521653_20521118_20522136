const EmployeeUpdateRepository = require("./EmployeeUpdateRespository");

exports.Update = () => {
    return EmployeeUpdateRepository.Update();
};

exports.EmployeeUpdate = async (id,name,address,phone) => {
    await EmployeeUpdateRepository.EmployeeUpdate(id,name,address,phone);
};