const EmployeeService = require("./EmployeeService");


  exports.Employee = async (req, res) => {
    const {id:id} = req.query;
    console.log(id);
    let Employee = [];
    if(id){
      Employee = await EmployeeService.filter(id);
    }
    else
    Employee = await EmployeeService.getAll();
    console.log(Employee);
      res.render('Employee/Employee', {
        Employee,
      });
    };