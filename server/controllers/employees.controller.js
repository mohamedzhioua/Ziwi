const Employees = require("../database-mongo/employees.model");
const ValidateEmployee = require("../validation/Employees.validation");

const AddEmployee = async (req, res) => {
  const { errors, isValid } = ValidateEmployee(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else { 
      await Employees.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "Employee Exist";
          res.status(404).json(errors);
        } else {
          await Employees.create(req.body);
          res.status(201).json({ message: "Employee added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllEmployees = async (req, res) => {
  try {
    const data = await Employees.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindOnelEmployee = async (req, res) => {
  try {
    const data = await Employees.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateEmployee = async (req, res) => {
  const { errors, isValid } = ValidateEmployee(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Employees.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteEmployee = async (req, res) => {
  try {
    await Employees.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Employee deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
 AddEmployee,
  FindAllEmployees,
  FindOnelEmployee,
  UpdateEmployee,
  DeleteEmployee,
};
