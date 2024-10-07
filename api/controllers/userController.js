const { users } = require('../data');

let userIdCounter = 1;

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: userIdCounter++, name, email, documents: [] };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === parseInt(id));

  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(user => user.id === parseInt(id));

  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = name !== undefined ? name : user.name;
  user.email = email !== undefined ? email : user.email;

  res.json(user);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(user => user.id === parseInt(id));
  

  if (userIndex === -1) {
    return res.status(404).json({ error: 'user not found' });
  }

  users.splice(userIndex, 1);

  res.status(204).send();
};