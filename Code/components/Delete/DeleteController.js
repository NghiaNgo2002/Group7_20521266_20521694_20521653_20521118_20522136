exports.Delete = (req, res) => {
    res.render('Delete/Delete');
  };
  const DeleteService = require("./DeleteService");
  
  exports.DeleteProduct = async (req,res) => {
    const {product_id:product_id} = req.body;
    const {product_name:product_name} = req.body;
    
    DeleteService.DeleteProduct(product_id,product_name);
    res.redirect("/Products");
  }
  