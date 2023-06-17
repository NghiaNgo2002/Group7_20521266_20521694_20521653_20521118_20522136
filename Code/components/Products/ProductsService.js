const ProductsRepository = require("./ProductsRepository");

exports.getAll = () => {
    return ProductsRepository.getAll();
};
exports.filter = (name) => {
    return ProductsRepository.filter(name);
};