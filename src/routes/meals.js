// Arquivo contendo as rotas do endpoint /products para as respectivas funções nos controllers
// Possui funções GET, PUT, POST E DELETE, sendo que as funções get podem ser feitos por
//  diversos parâmetros correspondente aos produtos
const express = require('express');
const router = express.Router();
const controller = require('../controllers/meal-controllers');

router.post('/', controller.post);
router.delete('/:id', controller.delete);
router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;
