const express = require('express');
const dataController = require('../controllers/data')

const router = express.Router();

router.get('/' , dataController.getData);
router.post('/' , dataController.addData);
router.get('/:id' , dataController.getDataById);
router.delete('/:id' , dataController.deleteDataById);
router.put('/:id' , dataController.updateDataById)


module.exports = router;



