// Import dependencies  
const express = require("express");
const EmployeesRoutes = require('./routes/employees.route')
const UsersRoutes = require('./routes/users.route')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const verifyAuth = require('./middleware/verifyAuth')

//load env variables
require('dotenv').config()

var employees = require('./database-mongo');
var users = require('./database-mongo')

const app = express();
const PORT = process.env.PORT || 3070

// express app config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cookieParser())
app.use(cors({origin: ["http://localhost:3000"],
credentials : true ,
}))

app.use("/", EmployeesRoutes);
app.use("/", UsersRoutes);


app.listen(PORT, function () {
  console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
});
