const regSchema = require('../schemas/regSchema');

const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    const { username, pass1, photo } = req.body;
    const hash = await bcrypt.hash(pass1, 10);
    const regUser = new regSchema();
    regUser.username = username;
    regUser.pass1 = hash;
    regUser.photo = photo;
    regUser.save().then(() => {
      res.send({ success: true });
    });
  },
  login: async (req, res) => {
    const { username, pass1 } = req.body;
    const myUser = await regSchema.findOne({ username });
    const compareResult = await bcrypt.compare(pass1, myUser.pass1);
    if (compareResult) {
      return res.send({ success: true, myUser });
    }
  },
};
