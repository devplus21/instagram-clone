const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");
const auth = require("../middleware/auth");

router.post("/register", authCtrl.register);

router.post("/login", authCtrl.login);

router.post("/forgot", authCtrl.forgotPassword);

router.post("/reset", auth, authCtrl.resetPassword);

router.post("/change_password", authCtrl.changePassword);

router.post("/logout", authCtrl.logout);

router.post("/refresh_token", authCtrl.generateAccessToken);

module.exports = router;
