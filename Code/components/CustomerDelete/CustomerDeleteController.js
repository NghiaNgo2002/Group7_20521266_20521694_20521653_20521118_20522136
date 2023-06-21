const CustomerDeleteService = require("./CustomerDeleteService");
exports.Delete = (req, res) => {
    res.render('CustomerDelete/CustomerDelete');
  };

  exports.CustomerDelete = async (req,res) => {
    const {customer_id:customer_id} = req.body;
    const {customer_name:customer_name} = req.body;
    console.log(customer_id,customer_name);
    CustomerDeleteService.CustomerDelete(customer_id,customer_name);
    res.redirect("/Customer");
  }
  