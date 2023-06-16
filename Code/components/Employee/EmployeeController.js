const EmployeeService = require("./EmployeeService");
exports.Employee = (req, res) => {
   res.render('Employee/Employee');
 };
 
 exports.Employee = async (req, res) => {
  let Employee = await EmployeeService.getAll();
  console.log(Employee);
    res.render('Employee/Employee', {
      Employee,
    });
  };