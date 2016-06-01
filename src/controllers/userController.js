const userController = () => {

    const getIndex = (req, res) => {
        res.send('still working!!');
    }

    const createUser = (req, res) => {
        res.send(req.body);
    }

    return {
        getIndex,
        createUser
    }
}

module.exports = userController;