const TransactionDeleteService = require("./TransactionDeleteService");
exports.Delete = (req, res) => {
    res.render('TransactionDelete/TransactionDelete');
  };
  exports.TransactionDelete = async (req,res) => {
    const {id:id} = req.body;
    TransactionDeleteService.TransactionDelete(id);
    res.redirect("/Transaction");
  }
  