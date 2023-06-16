const UpdateRepository = require("./UpdateRespository");

exports.Update = () => {
    return UpdateRepository.Update();
};

exports.UpdateProduct = async (id,name,price,category,description) => {
    await UpdateRepository.UpdateProduct(id,name,price,category,description);
};