var express = require('express');
var router = express.Router();
const productsController = require('../controllers/products_controller');

/* GET page. */
router.get('/', productsController.productList);
router.get('/add-product', productsController.addProductPage);
router.get('/edit-product/:productId', productsController.editProductPage);

/* POST page. */
router.post('/createProduct', productsController.createProduct);
router.post('/deleteProduct', productsController.deleteProduct);
router.post('/editProduct', productsController.editProduct);

module.exports = router;
