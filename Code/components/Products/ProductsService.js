const ProductsRepository = require("./ProductsRepository");

exports.getAll = () => {
    return ProductsRepository.getAll();
};