const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
// const multerUploads = require('./../utils/multer');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.post(
  '/upload',
  userController.photoUploader,
  userController.photoUploaderToCloud,
  userController.savePhotoInDb
);

router.get('/isLogged', authController.isLoggedIn);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe);
router.patch(
  '/updateMe',
  userController.photoUploader,
  userController.photoUploaderToCloud,
  userController.updateMe
);

router.delete('/deleteMe', userController.deleteMe);

module.exports = router;
