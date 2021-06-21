import jwt from 'jsonwebtoken';
import config from './config.js';

const jwtConfigSecret = config.JWT_SECRET;

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || jwtConfigSecret,
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    // request is 'Bearer XXXXXX' ( XXX... is token value)
    //line below will cut 7 string start from B in Bearer, get only token 
    const token = authorization.slice(7, authorization.length); 
    jwt.verify(
      token,
      process.env.JWT_SECRET || jwtConfigSecret,
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};