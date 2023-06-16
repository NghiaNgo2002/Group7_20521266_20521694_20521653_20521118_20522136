const CustomerDeleteRepository = require("./CustomerDeleteRespository");

exports.Delete = () => {
    return CustomerDeleteRepository.Delete();
};

exports.CustomerDelete = async (id,name) => {
    await CustomerDeleteRepository.CustomerDelete(id,name);
};