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