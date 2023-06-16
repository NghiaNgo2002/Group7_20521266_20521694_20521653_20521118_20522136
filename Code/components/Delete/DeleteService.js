const DeleteRepository = require("./DeleteRespository");

exports.Delete = () => {
    return DeleteRepository.Delete();
};

exports.DeleteProduct = async (id,name) => {
    await DeleteRepository.DeleteProduct(id,name);
};