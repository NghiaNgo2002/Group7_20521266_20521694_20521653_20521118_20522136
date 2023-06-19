const TransactionInsertService = require("./TransactionInsertService");
exports.Insert = (req, res) => {
    res.render('TransactionInsert/TransactionInsert');
  };
  exports.TransactionInsert = async (req,res) => {
    const {id:id} = req.body;
    const{producttype:producttype} = req.body;
    const {productname:productname} = req.body;
    const {datepurchase:datepurchase} = req.body;
    const {price:price} = req.body;

    TransactionInsertService.TransactionInsert(id,producttype,productname,datepurchase,price);
    res.redirect("/TransactionInsert");
  }
  