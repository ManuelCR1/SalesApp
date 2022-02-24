const { registerProductView, registerProduct } = require('../controllers/productController');


loginRouter.get("/registerProduct", registerProductView);
loginRouter.post("/registerProduct", registerProduct);