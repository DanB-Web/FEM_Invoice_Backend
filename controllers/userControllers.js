import { User } from '../models/userModel.js';
import { generateToken } from '../auth/generateToken.js';

export const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    let passwordCheck = false;
    const user = await User.findOne({email});

    if (user) {
      passwordCheck = await user.matchPassword(password);
    }

    if (user && passwordCheck) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(401).json({message: 'Username or password invalid!'});
    }
  } catch (e) {
    console.log(e);
    throw new Error('login error');
  }

}
