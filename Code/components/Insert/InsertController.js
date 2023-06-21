const InsertService = require("./InsertService");
exports.Insert = (req, res) => {
    res.render('Insert/Insert');
  };

exports.InsertProduct = async (req,res) => {
  const {product_id:product_id} = req.body;
  const {product_name:product_name} = req.body;
  const {product_type:product_type} = req.body;
  const {product_price:product_price} = req.body;
  const {product_description:product_description} = req.body;
  const {product_category:product_category} = req.body;

  InsertService.InsertProduct(product_type,product_id,product_name,product_price,product_category,product_description);
  res.redirect("/Products");
}
