 const TransactionService = require("./TransactionService");
  exports.Transaction = async (req, res) => {
    const {id:id} = req.query;
    console.log(id);
    let Transaction = [];
    if(id){
      Transaction = await TransactionService.filter(id);
    }
    else
    Transaction = await TransactionService.getAll();
    console.log(Transaction);
      res.render('Transaction/Transaction', {
        Transaction,
      });
    };