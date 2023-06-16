const CustomerService = require("./CustomerService");
exports.Customer = (req, res) => {
   res.render('Customer/Customer');
 };
 
 exports.Customer = async (req, res) => {
  let Customer = await CustomerService.getAll();
  console.log(Customer);
    res.render('Customer/Customer', {
      Customer,
    });
  };