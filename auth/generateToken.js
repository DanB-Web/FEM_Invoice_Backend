import jwt from 'jsonwebtoken';

//User variable to use in token, JWT secret and options object
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}