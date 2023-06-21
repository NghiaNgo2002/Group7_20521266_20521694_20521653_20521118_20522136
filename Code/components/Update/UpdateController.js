const UpdateService = require("./UpdateService");
exports.Update = (req, res) => {
    res.render('Update/Update');
  };
  exports.UpdateProduct = async (req,res) => {
    const {product_id:product_id} = req.body;
    const {product_name:product_name} = req.body;
    const {product_price:product_price} = req.body;
    const {product_description:product_description} = req.body;
    const {product_category:product_category} = req.body;
    console.log(product_id,product_name,product_price,product_category,product_description);
    UpdateService.UpdateProduct(product_id,product_name,product_price,product_category,product_description);
    res.redirect("/Products");
  }
  