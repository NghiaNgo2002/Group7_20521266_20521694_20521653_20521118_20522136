const ProductsService = require("./ProductsService");


exports.Products = async (req, res) => {
  let Products = await ProductsService.getAll();
  console.log(Products);
    res.render('Products/Products', {
      Products,
    });
  };