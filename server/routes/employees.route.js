
const express = require('express');
const { AddEmployee,FindAllEmployees, FindOnelEmployee, UpdateEmployee, DeleteEmployee} = require('../controllers/employees.controller');
const router = express.Router()

/*testing :
router.get('/api',(req,res)=>{
    res.send ('work')
}) */

//  add An employee
router.post('/employees', AddEmployee)


// find all employees
router.get('/employees', FindAllEmployees)


//  find One employee 
router.get('/employees/:id', FindOnelEmployee)

//  UpdateEmployees
router.put('/employees/:id', UpdateEmployee)

//  DeleteEmployees
router.delete('/employees/:id', DeleteEmployee)

module.exports = router;