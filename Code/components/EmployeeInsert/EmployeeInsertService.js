const EmployeeInsertRepository = require("./EmployeeInsertRespository");

exports.Insert = () => {
    return EmployeeInsertRepository.Insert();
};

exports.EmployeeInsert = async (id,name,phone,address) => {
    await EmployeeInsertRepository.EmployeeInsert(id,name,phone,address);
};