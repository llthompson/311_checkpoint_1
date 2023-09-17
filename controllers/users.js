let users = require('../data/index');

const listUsers = (req, res) => {
    console.log('test', users)
    res.send(users);
}

const showUser = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.send(user)
}

const create = (req, res) => {
    console.log('this should be the body', req.body)
    const newUser = {
        ...req.body,
        id: users.length + 1,
    };
    users.push(newUser);
    res.json(newUser)
}


module.exports = { listUsers, showUser, create }
