const express = require('express')
const router = express.Router()
const {getPoems, updatePoem, setPoem, deletePoem, addComment} = require('./poemController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', getPoems)
router.post('/', protect, setPoem)
router.put('/:id', protect, updatePoem)
router.delete('/:id', protect, deletePoem)
router.put('/:id/comments', protect, addComment)

//ALTERNATIVELY: router.route('/').get(getPoems).post(setPoem)
//and: router.route('/:id').put(updatePoem).delete(deletePoem)

module.exports = router