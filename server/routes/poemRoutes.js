const express = require('express')
const router = express.Router()
const {getPoems, updatePoem, setPoem, deletePoem} = require('./poemController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getPoems)
router.post('/', protect, setPoem)
router.put('/:id', protect, updatePoem)
router.delete('/:id', protect, deletePoem)

//ALTERNATIVELY: router.route('/').get(getPoems).post(setPoem)
//and: router.route('/:id').put(updatePoem).delete(deletePoem)

module.exports = router