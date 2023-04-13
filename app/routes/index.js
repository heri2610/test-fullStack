const { Router, } = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');
const {getData, addData, deleteData, updateData} = require('../controller')
const router = Router();

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.get('/api', getData);
router.post('/api', addData);
router.put('/api/:id', updateData);
router.delete('/api/:id', deleteData);

module.exports = router