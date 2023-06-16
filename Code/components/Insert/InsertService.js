const InsertRepository = require("./InsertRespository");

exports.Insert = () => {
    return InsertRepository.Insert();
};

exports.InsertProduct = async (type,id,name,price,category,description) => {
    await InsertRepository.InsertProduct(type,id,name,price,category,description);
};