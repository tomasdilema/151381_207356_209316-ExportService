const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');

router.post('/exportAuditory', exportController.exportAuditory);

module.exports = router;