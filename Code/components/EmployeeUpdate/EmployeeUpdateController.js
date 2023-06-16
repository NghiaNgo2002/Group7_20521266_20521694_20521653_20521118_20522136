const EmployeeUpdateService = require("./EmployeeUpdateService");
exports.Update = (req, res) => {
    res.render('EmployeeUpdate/EmployeeUpdate');
  };
  exports.EmployeeUpdate = async (req,res) => {
    const {employee_id:employee_id} = req.body;
    const {employee_name:employee_name} = req.body;
    const {employee_address:employee_address} = req.body;
    const {employee_phone:employee_phone} = req.body;
    console.log(employee_id,employee_name,employee_address,employee_name);
    EmployeeUpdateService.EmployeeUpdate(employee_id,employee_name,employee_address,employee_phone);
    res.redirect("/EmployeeUpdate");
  }