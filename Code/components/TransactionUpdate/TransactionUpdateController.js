const TransactionUpdateService = require("./TransactionUpdateService");
exports.Update = (req, res) => {
    res.render('TransactionUpdate/TransactionUpdate');
  };
  exports.TransactionUpdate = async (req,res) => {
    const {id:id} = req.body;
    const{producttype:producttype} = req.body;
    const {productname:productname} = req.body;
    const {quantity:quantity} = req.body;
    const {customerid:customerid} = req.body;
    const {customername:customername} = req.body;
    const {datepurchase:datepurchase} = req.body;
    const {price:price} = req.body;
    TransactionUpdateService.TransactionUpdate(id,producttype,productname,quantity,customerid,customername,datepurchase,price);
    res.redirect("/Transaction");
  }
  