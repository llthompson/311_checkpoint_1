let users = require('../data/index');

const list = (req, res) => {
    console.log('test', users)
    res.send(users);
}

const show = (req, res) => {
    const user = users.find((user) => user._id === parseInt(req.params._id));
    res.send(user)
}

const create = (req, res) => {
    console.log('where da body', req.body)
    const newUser = {
        ...req.body,
        _id: users.length + 1,
    };
    users.push(newUser);
    res.json(newUser)
}


module.exports = { list, show, create }
