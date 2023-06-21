const CustomerUpdateService = require("./CustomerUpdateService");
exports.Update = (req, res) => {
    res.render('CustomerUpdate/CustomerUpdate');
  };
exports.CustomerUpdate = async (req,res) => {
    const {customer_id:customer_id} = req.body;
    const {customer_name:customer_name} = req.body;
    const {customer_phone:customer_phone} = req.body;
    const {customer_address:customer_address} = req.body;
    const {customer_datepurchase:customer_datepurchase} = req.body;

    console.log(customer_id,customer_name,customer_phone,customer_address,customer_datepurchase);
    CustomerUpdateService.CustomerUpdate(customer_id,customer_name,customer_phone,customer_address,customer_datepurchase);
    res.redirect("/Customer");
  }
  