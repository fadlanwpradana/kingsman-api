const router = require("express").Router();
const validate = require("../validators/validate");
const auth = require("../middleware/authMiddleware");
const { createUser } = require("../schemas/userSchema");
const userController = require("../controllers/userController");

router.get("/", auth, userController.getUsers);
router.post("/", auth, validate(createUser), userController.createUser);

module.exports = router;
