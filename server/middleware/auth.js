const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/userModel'); // Import your User model


const generateToken = (user) => {
  return jwt.sign(
   { 
    id: user.id,
    isAdmin: user.isAdmin,
    isHR: user.isHR,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "30d",
  }
  );
};

const authenticateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = generateToken(user);
  req.user = user;
  req.token = token;
  next();
};

const isAdminMiddleware = (req, res, next) => {
    const user = req.user; 
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied: User is not an admin.' });
    }
  };
  
const isHrMiddleware = async (req,res,next) => {
    const user = req.user;
    if(user && user.isHR){
        next();
    } else {
        res.status(403).json({ message: 'Access denied: User is not HR.' });
    }
}

module.exports = { authenticateUser, isAdminMiddleware,isHrMiddleware};
