const { users, documents } = require('../data');

let documentIdCounter = 1;

exports.createDocument = (req, res) => {
  const { userId } = req.params;
  const { name, status } = req.body;
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) return res.status(404).json({ error: 'User not found' });

  const newDocument = { id: documentIdCounter, name, status, userId: user.id };
  documents.push(newDocument);
  user.documents.push(documentIdCounter++);

  res.status(201).json(newDocument);
};

exports.getDocuments = (req, res) => {
  const { userId } = req.params;

  const user = users.find(user => user.id === parseInt(userId));

  if (!user) return res.status(404).json({ error: 'User not found' });

  const userDocs = documents.filter(doc => doc.userId === parseInt(userId));

  res.json(userDocs);
};

exports.getDocumentById = (req, res) => {
  const { userId, id } = req.params;

  const user = users.find(user => user.id === parseInt(userId));

  if (!user) return res.status(404).json({ error: 'User not found' });

  const document = documents.find(doc => doc.id === parseInt(id) && doc.userId === parseInt(userId));

  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }

  res.json(document);
};

exports.updateDocument = (req, res) => {
  const { userId, id } = req.params;  
  const { name, status } = req.body;   

  const user = users.find(user => user.id === parseInt(userId));

  if (!user) return res.status(404).json({ error: 'User not found' });

  const document = documents.find(doc => doc.id === parseInt(id) && doc.userId === parseInt(userId));


  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }

  document.name =  name || document.name;   
  document.status =  status || document.status; 

  res.json(document);
};

exports.deleteDocument = (req, res) => {
  const { userId, id } = req.params;

  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }


  const documentIndex = documents.findIndex(doc => doc.id === parseInt(id) && doc.userId === parseInt(userId));
  

  if (documentIndex === -1) {
    return res.status(404).json({ error: 'Document not found' });
  }

  documents.splice(documentIndex, 1);

  return res.status(204).send();
};
