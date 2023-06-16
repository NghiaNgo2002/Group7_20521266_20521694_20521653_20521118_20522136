const EmployeeInsertService = require("./EmployeeInsertService");
exports.Insert = (req, res) => {
    res.render('EmployeeInsert/EmployeeInsert');
  };
  exports.EmployeeInsert = async (req,res) => {
    const {employee_id:employee_id} = req.body;
    const {employee_name:employee_name} = req.body;
    const {employee_address:employee_address} = req.body;
    const {employee_phone:employee_phone} = req.body;
    console.log(employee_id,employee_name,employee_address,employee_name);
    EmployeeInsertService.EmployeeInsert(employee_id,employee_name,employee_address,employee_phone);
    res.redirect("/EmployeeInsert");
  }
  