let users = require('../data/index');

const listUsers = (req, res) => {
    console.log('Here are the users:', users)
    res.send(users);
};

const showUser = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (user) {
        res.send(user)
    }
    res.send(`User ${req.params.id} might be your imaginary friend... they sure don't exist here.`, 404)
};

const createUser = (req, res) => {
    const newUser = {
        ...req.body,
        id: users.length + 1,
    };
    users.push(newUser);
    res.json(newUser)
};

const updateUser = (req, res) => {
    const userUpdate = users.findIndex((user) => user.id === parseInt(req.params.id));
    if (userUpdate > -1) {
        for (let key of Object.keys(req.body)) {
            users[userUpdate][key] = req.body[key]
        }
        res.send(users[userUpdate])
    }
    res.send(`The user at extension ${req.params.id} does not exist. Please try your call again... to a real user.`, 400)

};

const deleteUser = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (user) {
        users = users.filter(user => user.id !== parseInt(req.params.id));
        res.send(`Congratulations! You have successfully evicted user ${req.params.id} from the digital universe.`)
    }
    res.send('That which does not exist cannot be destroyed.', 400)


};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }
