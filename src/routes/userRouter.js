const express = require('express'),
      userRouter = express.Router();

const router = () => {
    
    const userController = require('../controllers/userController')();
    const {
        getIndex,
        createUser
    } = userController;

    userRouter.route('/')
        .get(getIndex)
        .post(createUser);

    return userRouter;
}

module.exports = router;