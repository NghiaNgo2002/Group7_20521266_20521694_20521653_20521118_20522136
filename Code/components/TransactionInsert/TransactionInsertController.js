const TransactionInsertService = require("./TransactionInsertService");
exports.Insert = (req, res) => {
    res.render('TransactionInsert/TransactionInsert');
  };
  exports.TransactionInsert = async (req,res) => {
    const {id:id} = req.body;
    const{producttype:producttype} = req.body;
    const {productname:productname} = req.body;
    const {quantity:quantity} = req.body;
    const {customerid:customerid} = req.body;
    const {customername:customername} = req.body;
    const {datepurchase:datepurchase} = req.body;
    const {price:price} = req.body;

    TransactionInsertService.TransactionInsert(id,producttype,productname,quantity,customerid,customername,datepurchase,price);
    res.redirect("/Transaction");
  }
  