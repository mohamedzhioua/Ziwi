const Users = require('../database-mongo/users.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function signup(req, res) {
    try{
    //  get email and pass word from the req body (input)
const{Email ,Password}= req.body ;
//hashing password
const hashedPassword = bcrypt.hashSync(Password,8) 

  //creat a user with the data 
  await Users.create({Email,Password:hashedPassword});
//   respond
res.status(201).json({ message: "user added with success" })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({message:"Email User already Exist please try another Email"})
      }
}

async function login(req, res) {
  try{
     // Get the email and password off req body 
     const { Email ,Password } = req.body;
     //find the user 
     const user = await Users.findOne({ Email });
     if (!user) return res.status(404).json({message:"Email does not exist!please Enter the right Email or You can make account"})

      // Compare sent in password with found user password hash
      const passwordMatch = bcrypt.compareSync(Password,user.Password);
      if (!passwordMatch) return res.status(404).json({message:"Wrong Password"})

    // create a JWT token :
    //plz visit (https://www.rfc-editor.org/rfc/rfc7519) so u can understand more the sub:subject and exp:Expiretion time
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
   const token = jwt.sign({sub : user._id ,exp}, process.env.SECRET_jwt_code);

      // take a look here (https://github.com/jshttp/cookie) so you can understand the diffrent options that can help you to Set the cookie 
       // Authorization : cookie name  / token is the value / option
      const options= {
        expires: new Date(exp),
      // httpOnly make only the browser & our server can read the cookie
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      }
       res.cookie("Authorization", token, options);
        // send it 
        res.status(201).json({ message: "welcom to your home page" ,token,user,});
      } catch (err) {
        console.log(err);
        res.status(400).json("error")
      }


}

const logout = async (req, res) => {
  try {
res.clearCookie("Authorization")
res.status(200).json(" You are logged out , to the next login !");
  }catch (err) {
  return res.sendStatus(400);
}
}
function checkAuth(req,res){
  // console.log(req.user);

  try{
  res.sendStatus(200);
} catch (err) {
  // console.log(err);
  return res.sendStatus(400);
}
}

module.exports={
    signup,
    login,
    logout,
    checkAuth,
}