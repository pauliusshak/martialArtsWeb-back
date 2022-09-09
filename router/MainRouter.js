const express = require('express');
const router = express.Router();

const {
  validateReg,
  validateLog,
  validateTheme,
  validatePhoto,
  commentValidate,
} = require('../validator/validator');

const {
  register,
  login,
  createTheme,
  addPhoto,
  addComment,
  updatePhoto,
  updateCommentPhotos,
  loadComments,
  sendInfo,
  loadThemes,
  searchByCreator,
  searchTopic,
  searchCategory,
  getCategoryProducts,
  getCount,
} = require('../controller/controller');

router.post('/register', validateReg, register);
router.post('/login', validateLog, login);
module.exports = router;
