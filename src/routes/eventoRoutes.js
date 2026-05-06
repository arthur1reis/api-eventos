const router = require('express').Router();
const controller = require('../controllers/eventoController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, controller.create);
router.get('/', controller.getAll);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;
