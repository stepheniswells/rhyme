const express = require('express')
const router = express.Router()
const {getPoems, updatePoem, setPoem, deletePoem} = require('./poemController')

router.get('/', getPoems)
router.post('/', setPoem)
router.put('/:id', updatePoem)
router.delete('/:id', deletePoem)

//ALTERNATIVELY: router.route('/').get(getPoems).post(setPoem)
//and: router.route('/:id').put(updatePoem).delete(deletePoem)

module.exports = router