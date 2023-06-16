const EmployeeDeleteRepository = require("./EmployeeDeleteRespository");

exports.Delete = () => {
    return EmployeeDeleteRepository.Delete();
};

exports.EmployeeDelete = async (id,name,phone,address) => {
    await EmployeeDeleteRepository.EmployeeDelete(id,name,phone,address);
};