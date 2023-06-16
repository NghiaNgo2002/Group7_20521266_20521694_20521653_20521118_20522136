const CustomerUpdateRepository = require("./CustomerUpdateRespository");

exports.Update = () => {
    return CustomerUpdateRepository.Update();
};

exports.CustomerUpdate = async (id,name,phone,address,datepurchase) => {
    await CustomerUpdateRepository.CustomerUpdate(id,name,phone,address,datepurchase);
};