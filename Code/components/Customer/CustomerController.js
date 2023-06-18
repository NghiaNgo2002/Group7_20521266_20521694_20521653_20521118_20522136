const CustomerService = require("./CustomerService");


  exports.Customer = async (req, res) => {
    const {id:id} = req.query;
    console.log(id);
    let Customer = [];
    if(id){
      Customer = await CustomerService.filter(id);
    }
    else
    Customer = await CustomerService.getAll();
    console.log(Customer);
      res.render('Customer/Customer', {
        Customer,
      });
    };