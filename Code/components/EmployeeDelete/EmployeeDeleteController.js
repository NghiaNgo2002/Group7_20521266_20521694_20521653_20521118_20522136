const EmployeeDeleteService = require("./EmployeeDeleteService");
exports.Delete = (req, res) => {
    res.render('EmployeeDelete/EmployeeDelete');
  };
  exports.EmployeeDelete = async (req,res) => {
    const {employee_id:employee_id} = req.body;
    const {employee_name:employee_name} = req.body;
    EmployeeDeleteService.EmployeeDelete(employee_id,employee_name);
    res.redirect("/Employee");
  }
  