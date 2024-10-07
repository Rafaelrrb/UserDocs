// routes/documentRoutes.js
const express = require('express');
const documentController = require('../controllers/documentController');

const router = express.Router();

router.post('/:userId/documents', documentController.createDocument);
router.get('/:userId/documents', documentController.getDocuments);
router.get('/:userId/documents/:id', documentController.getDocumentById);
router.put('/:userId/documents/:id', documentController.updateDocument);
router.delete('/:userId/documents/:id', documentController.deleteDocument);

module.exports = router;
