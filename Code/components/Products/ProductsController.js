const ProductsService = require("./ProductsService");


exports.Products = async (req, res) => {
  const {name:name} = req.query;
  console.log(name);
  let Products = [];
  if(name){
    Products = await ProductsService.filter(name);
  }
  else
  Products = await ProductsService.getAll();
  console.log(Products);
    res.render('Products/Products', {
      Products,
    });
  };