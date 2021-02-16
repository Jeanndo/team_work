import express from  'express'
import * as employeeController from '../controllers/employeeController'
import * as authController from '../controllers/authController'
const router = express.Router();

router.post('/signup',authController.signUp)
router.post('/login',authController.login)

router
.route('/')
.get(employeeController.getAllEmployees)
.post(employeeController.createEmployee);

router
.route('/:id')
.get(employeeController.getEmployee)
.delete(employeeController.deleteEmployee)
.patch(employeeController.updateEmployee);

export default router;