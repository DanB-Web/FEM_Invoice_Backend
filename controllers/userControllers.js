export const login = async (req, res) => {

  try {
    console.log('login')
    res.status(200).json({message:'login'})
  } catch (e) {
    throw new Error('login error')
  }

}

export const logout = (req, res) => {

  try {
    console.log('logout')
    res.status(200).json({message:'logout'})
  } catch (e) {
    throw new Error('logout error')
  }

}