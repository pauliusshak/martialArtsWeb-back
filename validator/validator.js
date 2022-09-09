const regSchema = require('../schemas/regSchema');

module.exports = {
  validateReg: async (req, res, next) => {
    const { username, pass1, pass2} = req.body;
    const findUsername = await regSchema.findOne({ username });
    if (findUsername)
      return res.send({
        success: false,
        error: 'User with this username already exists',
      });
    if (username.length < 4)
      return res.send({
        success: false,
        error: 'Username can`t be shorter than 4 characters',
      });
    if (username.length > 20)
      return res.send({
        success: false,
        error: 'Username can`t be longer than 20 characters',
      });
    if (pass1.length > 20)
      return res.send({
        success: false,
        error: 'Pass can`t be longer than 20 characters',
      });
    if (pass1.length < 4)
      return res.send({
        success: false,
        error: 'Password can`t be shorter than 4 characters',
      });
    if (pass2 !== pass1)
      return res.send({ success: false, error: 'Passwords don`t match' });
    next();
  },
  validateLog: async (req, res, next) => {
    const { username, pass1 } = req.body;
    const user = await regSchema.findOne({ username });
    if (!user)
      return res.send({
        success: false,
        error: 'No user with this username was found',
      });
    if (username.length < 4)
      return res.send({
        success: false,
        error: 'Username can`t be shorter than 4 characters',
      });
    if (username.length > 20)
      return res.send({
        success: false,
        error: 'Username can`t be longer than 20 characters',
      });
    if (pass1.length > 20)
      return res.send({
        success: false,
        error: 'Pass can`t be longer than 20 characters',
      });
    if (pass1.length < 4)
      return res.send({
        success: false,
        error: 'Password can`t be shorter than 4 characters',
      });
    next();
  },
};
