import express from 'express'

import { deleteProduct, getProducts, postProduct, putProduct } from '../controllers/product.controller.js';

const router = express.Router();


router.post('/', postProduct)
    .delete("/:id", deleteProduct)
    .get("/", getProducts)
    .put("/:id", putProduct);

export default router;