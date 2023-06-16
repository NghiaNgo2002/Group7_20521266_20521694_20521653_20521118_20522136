const CustomerInsertRepository = require("./CustomerInsertRespository");

exports.Insert = () => {
    return CustomerInsertRepository.Insert();
};

exports.CustomerInsert = async (id,name,phone,address,datepurchase) => {
    await CustomerInsertRepository.CustomerInsert(id,name,phone,address,datepurchase);
};